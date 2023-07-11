import Image from 'next/image'
import { useAppContext } from '@/Context/links'



export default function MovieSearch({ data}) {

  const {changeMovie,imgLink,setQuery} = useAppContext()
    const movies = data.filter(item=>item.poster_path  !==null )
    return( 
        <div>
              {movies.map(item =>
       
                <button className="movie" key={item.id} onClick={() => {changeMovie(item.id);setQuery('search','');window.scrollTo(0,350);}}>
                  <Image src={imgLink + item.poster_path} alt={item.title} width={75} height={150} />
                  <h1>{item.title}</h1>
                </button>
                
           ) }
              
        </div> )

  


}
