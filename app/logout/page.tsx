'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
export default function Page() {
  const router = useRouter()
useEffect(()=>{
  setTimeout(() => {
  router.refresh()
  router.push('/')
}, 1500);
})

  
  
  return (
<h1>Logging Out...</h1>
  )
}