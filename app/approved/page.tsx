import { redirect } from 'next/navigation'
import { cookies } from 'next/headers';
export default function Page() {

     redirect('/')


  return (
<h1>Logging in...</h1>
  )
}