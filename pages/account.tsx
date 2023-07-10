import Image from "next/image"
import Button from 'react-bootstrap/Button';
import Reel from '@/components/reel';
import { List } from "@/components/list";
import { useSessionContext } from '@/Context/user';
import {useEffect,useState } from 'react' 
import Link from "next/link";
import cookie from 'js-cookie'
import { Movie } from "@/components/movie";
export default  function Account({name,avatar,account_id,}){
  const auth:string = process.env.auth !== undefined ? process.env.auth : ""
    const {favorites,getFavorites,addFavorite,getLists,lists,getListItems,listItems,loadLists} = useSessionContext()
    const [loading,setLoading] = useState(true)
    const imgLink = `https://image.tmdb.org/t/p/original/`
useEffect(()=>{
  if(loading){
getFavorites()
getLists()
setLoading(false)
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[loading,listItems,favorites])



    return(
        <div className="movies favMovies">
          <h1>Lists</h1>{
            lists.map(list=><List key={list.id} data={list.id}/>)
          }

          <h1>Favorite Movies</h1>
          {favorites.length === 0  && <h1>None to show :(</h1>}


{favorites.map(movie=><div className="movie favMovie" key={movie.id} >

<Image src={imgLink + movie.poster_path} alt={movie.title} width={75} height={150} />
          <h1>{movie.title}</h1> 
          <Button onClick={()=>{addFavorite('movie',movie.id,false);setLoading(true)}}>Delete?</Button>

</div>)}
           </div >
    )



  }
export function getServerSideProps({req,res}){
    return {props: {
      token: req.cookies.token || "",
      id: req.cookies.sessionId || "",
      account_id: req.cookies.account_id || "",
      name: req.cookies.name || "",
      avatar : req.cookies.avatar || "",
    }
    
    }
  }

