import PublicList from "@/components/lists/publicList"
import { getDetails } from "@/utils/getLists"
export default async function PublicLists({ params }: { params: { id: string } }) {
    const { id } = params
    const list = await getDetails(id)

    return (
        <>
<PublicList list={list}/>
        </>
    )
}