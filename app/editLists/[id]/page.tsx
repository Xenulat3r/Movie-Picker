import { cookies } from 'next/headers'
import { getDetails,clearList,deleteList,removeFromList } from "@/utils/getLists"


import ListEdit from '@/components/account/editList';
export default async function Page({params}:{params:{id:string}}){

    const {id} = params
    const list = await getDetails(id)
    const {items} = list
    const cookieStore = cookies()
    const token = cookieStore.get('session')?.value
    return(
<ListEdit list={list} items={items} token={token}/>
      )
}