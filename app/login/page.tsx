
import Login from "@/components/login";
import { getToken } from '@/utils/getUser';
import { redirect } from 'next/navigation'
export default async function Page() {

    const token = await getToken()
    console.log(token)
    const myURL = process.env.NEXT_PUBLIC_URL
    const link = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${myURL}approved`
    if(token){
        redirect(link)
    }
    return (<>

        {token}
    </>)
}
