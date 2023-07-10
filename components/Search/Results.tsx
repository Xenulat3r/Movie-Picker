import React from 'react'
import Image from 'next/image'
import { useAppContext } from '@/Context/links'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function Results({ data,category }) {

  const context = useAppContext()

if(category ===""){
    return (
        <h1>loading...</h1>
    )
}
  else if(category==="people"){
      const people = data.filter(item=>item.profile_path  !==null )
    return 
      (  <ul>
              {people.map(item =>{
        
              const img = item.poster_path ? item.poster_path : item.profile_path
              const name = item.title ? item.title : item.name
        return(
                <li key={item.id} onClick={() => context.changeMovie(item.known_for[0].id)}>
                  <Image src={context.imgLink + img} alt={item.title} width={75} height={150} />
                  <h1>{name}</h1>
                </li>
                
           ) }
              )}
        </ul> )
         
        
          
  } else if(category === "movies"){

    const movies = data.filter(item=>item.poster_path  !==null )
    return( 
        <ul>
              {movies.map(item =>{
        
              const img = item.poster_path ? item.poster_path : item.profile_path
              const name = item.title ? item.title : item.name
        return(
                <li key={item.id} onClick={() => context.changeMovie(item.id)}>
                  <Image src={context.imgLink + img} alt={item.title} width={75} height={150} />
                  <h1>{name}</h1>
                </li>
                
           ) }
              )}
        </ul> )
           
  }


}
