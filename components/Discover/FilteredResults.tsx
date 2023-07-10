import Reel from "../reel"
import {useState,useEffect} from 'react'
import { useAppContext } from "@/Context/links"
import Image from "next/image"

export default function FilteredResults()  {
    const context = useAppContext()
  const [data,setData] = useState<any[]>([])
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch(context.discoverLink)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        
        if(context.movie === ""){
          const {id} = data.results[0]
          context.changeMovie(id)
          
        }

        setLoading(false); });
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.discoverLink]);

  useEffect(()=>{
            if(data.length > 0){
        context.changeMovie(data[0].id)
     }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data])


   return (

<div className="results">
<h1>Filtered Search Results By Popularity:</h1>
{data.map(movie =>{

       return <button className="movie favMovie" key={movie.id} onClick={(()=>{context.changeMovie(movie.id);window.scrollTo(0,0)})}>
          <Image src={context.imgLink + movie.poster_path} alt={movie.title} width={75} height={150} />
          <h1>{movie.title}</h1> 
        </button>}
  )}
</div>
   )}







 


