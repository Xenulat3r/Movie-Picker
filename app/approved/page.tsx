import { redirect } from 'next/navigation'

export default async function Page() {
 setTimeout(() => {
  redirect("/")
 }, 5000); 
return(
  <h1>Logging in...</h1>
)
}