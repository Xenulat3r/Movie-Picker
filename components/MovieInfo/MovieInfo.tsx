import { useAppContext } from "@/Context/links"
import { useSessionContext } from '../../Context/user';
import {useState,useEffect} from 'react'
import Trailer from "./Trailer";
import Image from "next/image"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoggedIn from "./LoggedIn";
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Badge from 'react-bootstrap/Badge';

export default function MovieInfo() {
    const context = useAppContext()
    const {addFavorite,account,sessionId,movieStatus,getMovieStatus,addToList,getLists,lists,createList} = useSessionContext()
    const usingFilters = context.letterRating.length > 0 || context.usedGenres.length > 0 || context.usedProviders.length > 0||
    context.showPeople.length > 0 
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
// eslint-disable-next-line react-hooks/exhaustive-deps
      }, [data,context.infoLink,context.movie]);

      useEffect(()=>{
         if(context.movie && sessionId){
            getMovieStatus(context.movie)
            getLists()
  
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
      },[sessionId,context.movie,loading])

if(context.movie == ""){
    return(
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button variant="primary" xs={6} />
      </Card.Body>
    </Card>)
}else if (context.movie !==""){
  return (
    <div className="d-flex justify-content-around">      
 
    <Card style={{ width: '100%' }}>
{usingFilters && <Card.Header>Top Result</Card.Header>} 
      <Card.Body>
      <div className="selectedMovie" style={{
         backgroundImage:`url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`
          }}>
<div className="movieInfoBackground"> 
  <h1>{data.title}</h1>
  <div className="movieInfo">
 <h1>{data.tagline}</h1>


</div></div></div>
<Card.Title>
 
</Card.Title>
        <Card.Text>
 <h5> {data.genres.map(item=><Badge bg="secondary" key={item.name}>{item.name}</Badge>)} </h5> 
<h5> {data.runtime}mins </h5>
<h5>{data.overview}</h5>
        </Card.Text>
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

      </Card.Body>
    </Card>


  </div>
  )
}
else{
  return (
<div className="selectedMovie" style={{
         backgroundImage:`url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`
          }}>


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