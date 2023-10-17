'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Movie from './movie';

export default function MovieCarousel({movies}:{movies:[{
  media_type:string,
  id:number,
  backdrop_path:string,
  title:string,
  overview:string,
  genre_ids:[number],
  popularity:number,
  vote_average:number,
  release_date: Date,
  poster_path:string,
  
}]}){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
      const data = movies.filter(item=>item.poster_path !== null)
      return(
      <Carousel responsive={responsive}>
{data.map(movie=> <div key={movie.id}><Movie movie={movie} width={8}/></div> )}
      </Carousel>)

}