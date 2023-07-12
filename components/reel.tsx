import React from 'react'
import Image from 'next/image'
import { useAppContext } from '@/Context/links'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function Reel({ data }) {


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 3
    },
    tinyMobile: {
      breakpoint: { max: 400, min: 0 },
      items: 2
    }
  };


  const context = useAppContext()
  const movies = data?.filter(item=>item.poster_path  !==null )
  return (
    <Carousel 
    responsive={responsive}
    swipeable={true}
    draggable={true}
    infinite={true}
    itemClass="carouselItem"
    removeArrowOnDeviceType={["tablet", "mobile","tinyMobile"]}


    >



        {movies?.map(movie=>
        <button key={movie.id} onClick={() => {context.changeMovie(movie.id);window.scrollTo(0,200);}}>
<Card  style={{ width: '10rem', height:'21rem' }}>
<Card.Img variant="top" src={context.imgLink + movie.poster_path} />
<Card.Body>
  <Card.Title>  {movie.title}</Card.Title>

</Card.Body>
</Card>
</button>
        )}

    </Carousel>

  )
}
