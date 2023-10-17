import MovieCarousel from "@/components/carousel"
import List from "@/components/lists/list"
import PublicLists from "@/components/lists/public"
import PublicList from "@/components/lists/publicList"
import User from "@/components/pages/user"
import { getLists, getUserInfo, getFavorites } from "@/utils/getUser"
import Link from "next/link"

export default async function Page({ params }: { params: { id: string } }) {
    const {id} = params
    const accountDetails = await getUserInfo(id)
    const lists = await getLists(id)
    const {results} = await getFavorites(id)
    const filtered = results.filter(item=>item.backdrop_path !== undefined)
    const sorted = filtered.sort((a,b)=> b.vote_average -  a.vote_average)

    return(<>
     <div className='text-center m-2'>
<User data={accountDetails} faves={sorted}/> 

</div>
 <div className='text-center m-2'>
    <h1>Lists:</h1>
   
    {lists.map(item=><div key={item.id} >
        <h1><Link href={`/lists/${item.id}`}>{item.name}</Link></h1>
        <h5>{item.description && item.description }</h5>

        <PublicLists id={item.id} /></div>)}

    </div>
    <div className='text-center m-2'>
        <h1> Favorites: </h1>
  <MovieCarousel movies={results}/>
  </div>
   
    </>)
}