import Image from "next/image"
import Reel from "./reel"
import { useAppContext } from '@/Context/links'
import Link from "next/link"


export const Movie = ({data}) =>{
    const {setDiscover} = useAppContext()
  
    const imgLink = `https://image.tmdb.org/t/p/original/`

   return (
    <>
    {data?.map(movie=><button className="movie favMovie" key={movie.id} >

    <Image src={imgLink + movie.poster_path} alt={movie.title} width={75} height={150} />
              <h1>{movie.title}</h1> 

    </button>)}
    </>
   )

}