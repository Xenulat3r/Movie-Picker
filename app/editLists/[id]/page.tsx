import { cookies } from 'next/headers'
import { getDetails,clearList,deleteList,removeFromList } from "@/utils/getLists"
import { redirect } from 'next/navigation'


import ListEdit from '@/components/account/editList';
export default async function Page({params}:{params:{id:string}}){

    const {id} = params
    const list = await getDetails(id)
    const {items} = list
    const cookieStore = cookies()
    const token = cookieStore.get('movieSession')?.value || ""
    
    if(token !== ""){return(
      <main>
<ListEdit list={list} items={items} token={token}/>
</main>
      )}else{
        redirect("/")
      }
}