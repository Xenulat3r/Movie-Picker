import {useEffect,useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useAppContext } from "@/Context/links"
import { Button } from 'react-bootstrap';
import Image from 'next/image'
export default function Watch(){
    const {movie,imgLink,getMovieProviders} = useAppContext()
    const[movieProviders,setMovieProviders] = useState({
        link:'',
        flatrate:[{
            logo_path:'', 
            provider_id:"",
            provider_name:"",
        }],
        rent:[{
            logo_path:'', 
            provider_id:"",
            provider_name:"",
        }],
        buy:[{
            logo_path:'', 
            provider_id:"",
            provider_name:"",
        }]
    })
    async function setWatchProviders (){

   const watch = await fetch(getMovieProviders).then(res=>res.json()).then(res=>{return res.results.US})
   setMovieProviders(watch)
}

useEffect(()=>{
    if(movie !== ""){
        setWatchProviders()

}
// eslint-disable-next-line react-hooks/exhaustive-deps
},[movie])



if(movieProviders !== undefined){
    return(
        <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header><h4>Stream <p>{movieProviders.flatrate !== undefined ? movieProviders.flatrate.length : "No"}  Results</p></h4></Accordion.Header>
          <Accordion.Body>
{movieProviders.flatrate !== undefined && <div className="filter">

{movieProviders.flatrate?.map(item=>
    <Button key={item.provider_id}>
                 <Image className='filterImg' src={imgLink + item.logo_path} width={50} height={50} alt={item.provider_name} />
                 {item.provider_name} 
    </Button> )}

</div>}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><h4>Rent <p>{movieProviders.flatrate !== undefined ? movieProviders.flatrate.length : "No"}  Results</p></h4></Accordion.Header>
          <Accordion.Body>
 { movieProviders.flatrate !== undefined &&          <div className="filter">

{movieProviders.flatrate?.map(item=>


    <Button key={item.provider_id}>
         <Image className='filterImg' src={imgLink + item.logo_path} width={50} height={50} alt={item.provider_name} />
        
        {item.provider_name} 
    </Button> )}

</div>}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header><h4> Buy  <p>{movieProviders.buy !== undefined ? movieProviders.buy.length : "No"} Results</p></h4> </Accordion.Header>
          <Accordion.Body>
   {movieProviders.buy !== undefined &&   <div className="filter">
{movieProviders.buy?.map(item=>
    <Button key={item.provider_id}>
                 <Image className='filterImg' src={imgLink + item.logo_path} width={50} height={50} alt={item.provider_name} />
        {item.provider_name} 

    </Button> )}

</div>}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )} else{
        return null
    }
}