import Reel from "../reel"
import {useState,useEffect} from 'react'
import { useAppContext } from "@/Context/links"
import Trailer from "../MovieInfo/Trailer"

export default function DiscoverReel()  {
    const context = useAppContext()
  const [data,setData] = useState<any[]>([])
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch(context.discoverLink)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
          const {id} = data.results[0]
          context.changeMovie(id)
        setLoading(false); });

// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.discoverLink]);


   return (

    
   <>
<h1>Most Searched Movies</h1>
   <Reel data={data}/>

   </>
  )}



 


