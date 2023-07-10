import React from 'react'
import Image from 'next/image'
import { useAppContext } from '@/Context/links'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export default function Reel({ data }) {


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 3
    },
    tinyMobile: {
      breakpoint: { max: 400, min: 0 },
      items: 3
    }
  };


  const context = useAppContext()
  const movies = data.filter(item=>item.poster_path  !==null )
  return (
    <Carousel 
    responsive={responsive}
    swipeable={false}
    infinite={true}
    >

      {
      movies.map(movie =>{
    
          return <button key={movie.id} onClick={() => context.changeMovie(movie.id)}>
            <Image className='reelItem' src={context.imgLink + movie.poster_path} alt={movie.title}   height={250} width={100} />
            <h1 className='reelText'>{movie.title}</h1>

           
          </button>}
        )}

    </Carousel>

  )
}
