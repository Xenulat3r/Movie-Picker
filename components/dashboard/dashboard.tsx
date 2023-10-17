'use client'
import { useEffect,useState } from 'react';
import { useRouter } from 'next/navigation'
export default function Dashboard({data}:{data:{name:string,
                                     id:number, 
                                     iso_639_1:string, 
                                     iso_s166_1:string, 
                                     username:string}}
                                     ) {
  const router = useRouter()
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    if(loading){
router.refresh()
setLoading(false)
    }
  },[loading])
  return (
<div>
    <h1>Welcome back {data.name}!</h1>

      
</div>
  )
}