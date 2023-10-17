import { getRecs } from "@/utils/getDash";
import MovieCarousel from "../carousel";


export default async function MovieRecs({ movie }: {
    movie: {
        backdrop_path: string,
        title: string,
        poster_path: string,
        id: number,
        overview: string
    }
}) {

    const recs = await getRecs(movie.id)

    return (
        <div>
           <h3>Because you favorited: {movie.title}</h3> 
          
           <MovieCarousel movies={recs}/>


        </div>
    )


}