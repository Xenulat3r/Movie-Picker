import Image from "next/image"
import Link from "next/link";
import Movie from "../movie";
const imgLink = `https://image.tmdb.org/t/p/original/`
export default function PublicList({ list }: {
    list: {
        name: string, created_by: string,
        items: [{ title: string, poster_path: string, overview: string, id: string, vote_average: number }]
    }
}) {
    
    return (<>

        <h1>{list.name}</h1>
        <ul>
            {list.items.map(item => <li key={item.id} className='m-2 flex flex-row'>
                <Movie movie={item} width={8} />
                <div className='m-2 p-2'>

                    <p>{item.overview}</p>
                    <p>Average Rating: {item.vote_average}/10</p>
                </div>


            </li>)}
        </ul>

        <h4>Created by: {list.created_by}</h4>

    </>)
}