'use client'
import Image from 'next/image'
import Link from 'next/link'
import { peopleResult } from '@/utils/getTypes'
export default function PeopleResults({ data}:{data:Array<peopleResult>}) {
  


    if(data !== undefined){
      
      const people = data.filter(item=>item.profile_path  !==null )
      const imgLink = `https://image.tmdb.org/t/p/original/`
    return( 
      <div className=' flex flex-column  '>

               {people.map((item:any) =>
   <div key={item.id} > 

<button className=' w-100  p-1 m-1 flex flex-row justify-left bg-slate-100 hover:bg-slate-300'>

                   <Link href={`/cast/${item.id}`}><Image src={imgLink + item.profile_path} alt={item.name} width={75} height={150} /></Link>
                   <p>{item.name}</p>  
                 </button>
                 </div>
                
           ) }
              
        </div> )
}
  


}
