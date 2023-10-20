import { redirect } from 'next/navigation'
export default function Page() {
  setTimeout(() => {
     redirect('/')
  }, 500);

  return (
<h1>Logging in...</h1>
  )
}