import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export default function Page() {
  const cookieStore = cookies()
  const session = cookieStore.get('session')?.value || undefined
if(session){
    redirect('/')
}

  return (
<h1>Logging in...</h1>
  )
}