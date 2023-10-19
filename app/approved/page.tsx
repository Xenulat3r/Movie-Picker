import { redirect } from 'next/navigation'
export default function Page() {
  setTimeout(() => {
     redirect('/')
  }, 3000);

  return (
<h1>Logging in...</h1>
  )
}