'use client'
import Image from 'next/image'
import Link from 'next/link'
import { movieResult } from '@/utils/getTypes'
export default function MovieResults({ data}:{data:Array<movieResult>}) {
  


    if(data !== undefined && data.length > 0){
      
      const movies = data?.filter(item=>item.poster_path  !==null )
      const imgLink = `https://image.tmdb.org/t/p/original/`
    return( 
      <div className=' flex flex-column  '>

              {movies.map((item:any) =>
   <div key={item.id} > 

                   <button className=' w-100  p-1 m-1 flex flex-row justify-left bg-slate-100 hover:bg-slate-300'>
                   <Link href={`/movies/${item.id}`}><Image src={imgLink + item.poster_path} alt={item.title} width={75} height={150} /></Link>
                   <h1>{item.title}</h1>
                 </button>
                </div>
           ) }
              
        </div> )
}
  


}
