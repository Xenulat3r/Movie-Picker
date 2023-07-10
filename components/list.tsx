
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import { useSessionContext } from '@/context/user';
import {useState,useEffect} from 'react'
export  const List = ({data})=>{
  const auth:string = process.env.auth !== undefined ? process.env.auth : ""
const imgLink = `https://image.tmdb.org/t/p/original/`
const {clearList,removeFromList,deleteList} = useSessionContext()
const [items,setItems] =useState<any[]>([])
const [name,setName] = useState('')
useEffect(()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: auth
    }
  };
 fetch(`https://api.themoviedb.org/3/list/${data}?language=en-US`, options)
  .then(response => response.json())
     .then(response=>{ 
      setName(response.name)
       setItems(response.items)
     })
})

return(
  <div className='list' style={{backgroundImage:`url(${imgLink}${data.backdrop_path})`}}>

    <h1>{name}</h1>
<h2>{data.description}</h2>


{items?.map(movie=><div className="movie favMovie" key={movie.id} >
<Image src={imgLink + movie.poster_path} alt={movie.title} width={75} height={150} />
          <h1>{movie.title}</h1> 
          <Button onClick={()=>{removeFromList(data,movie.id); }}>Delete?</Button>
</div>)}
{items !== undefined && 
<div>
<Button onClick={()=>{clearList(data)}}>Clear All Items?</Button>
<Button onClick={()=>{deleteList(data)}} >Delete List?</Button>
</div>
}
  </div>
)
}