import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { useAppContext } from "@/Context/links"
import { useSessionContext } from '@/Context/user';
import {useState,useEffect} from 'react'

export default function LoggedIn({data}){
    const context = useAppContext()
    const {sessionId,addFavorite,movieStatus,getMovieStatus,addToList,lists,createList,getLists} = useSessionContext()
    const [listName,setListName] = useState('')
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        if(loading){
            getMovieStatus(context.movie)
            getLists()
            setLoading(false)
      
        }
    },[loading])
    return(
<div className="buttons">
<h2>{ movieStatus.favorite ?

    <Button variant="outline-primary" onClick={()=>{addFavorite("movie",context.movie,false);getMovieStatus(context.movie);setLoading(true)}}>Remove From Favorites?</Button>:
    <Button onClick={()=>{addFavorite("movie",context.movie,true);getMovieStatus(context.movie);setLoading(true)}}>Add To Favorites?</Button>
}</h2>

 <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" >
       Add To List?
      </Dropdown.Toggle>

      <Dropdown.Menu>
{        lists.map(list=>{
          return(<Dropdown.Item key={list.id} onClick={(()=>{addToList(list.id,context.movie)})}>
            {list.name}
            </Dropdown.Item>)
        })}

    
   
        <Dropdown.Item onClick={()=>{createList(listName);setListName('');setLoading(true)}}>
          Create List?
        </Dropdown.Item>
      <input placeholder="List Name" value={listName} onChange={(e)=>{setListName(e.target.value)}}/> 
      
      </Dropdown.Menu>
    </Dropdown> 


</div>
    )
}