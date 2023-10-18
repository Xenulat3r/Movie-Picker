import PublicList from "@/components/lists/publicList"
import { getDetails } from "@/utils/getLists"
import { getLists } from "@/utils/getUser"
import MovieCarousel from "../carousel"
import Movie from "../movie"

export default async function ListList({ id }: { id: string  }) {
    const list = await getDetails(id)
    const items = list.items.slice(0,4)
    

    return (
        <>
        <div className='flex flex-row flex-wrap m-2' >
{items.map((item:any)=><div key={item.id} className='m-2' >
    <Movie movie={item} width={7}/>
</div>)}
</div>
        </>
    )
}