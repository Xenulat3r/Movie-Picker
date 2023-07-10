import { useAppContext } from "@/Context/links"
import { useSessionContext } from '@/context/user';
import {useState,useEffect} from 'react'
import Trailer from "./Trailer";
import Image from "next/image"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoggedIn from "./LoggedIn";

export default function MovieInfo() {
    const context = useAppContext()
    const {addFavorite,account,sessionId,movieStatus,getMovieStatus,addToList,getLists,lists,createList} = useSessionContext()
    const [data,setData] = useState({
        title:"",
        tagline:"",
        backdrop_path:"",
        runtime:"",
        overview:"",
        genres:[{name:""}]
    })
    const [loading,setLoading] = useState(true)
    const [fave,setFave] = useState(false)
    const [show, setShow] = useState(false);
    const [listName,setListName] = useState('')


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    useEffect(() => {
     

        if(context.movie !== ""){
        fetch(context.infoLink)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            context.getTrailer(context.movie)   
setLoading(false)
          });} 

      }, [data,context.infoLink,context.movie]);

      useEffect(()=>{
         if(context.movie && sessionId){
            getMovieStatus(context.movie)
            getLists()
  
          }
      },[sessionId,context.movie,loading])

if(context.movie == ""){
    return(
<h1>Select a movie</h1>)
}else{
  return (
<div className="selectedMovie" style={{
         backgroundImage:`url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`
          }}>
    {/* <Image className="movieImg" src={context.imgLink + data.backdrop_path}  alt={data.title} width={800} height={600}/> */}

<div className="movieInfoBackground">    <h1>{data.title}</h1>
  <div className="movieInfo">

<h2>{data.tagline}</h2>
 <h2> {data.genres.map(item=>item.name)} </h2> 
<h2> {data.runtime}mins </h2>
<h2>{data.overview}</h2>


<Button variant="secondary" onClick={handleShow}>
       Watch Trailer
      </Button>
{account!== "" &&<LoggedIn data={movieStatus}/>}


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

<Trailer data={context.trailerId}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


</div>
</div>
</div>
  )

}
}