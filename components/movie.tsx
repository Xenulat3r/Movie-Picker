'use client'

import Card from 'react-bootstrap/Card';
import Link from 'next/link';

export default function Movie({ movie, width }: {
  movie: {
    media_type: string,
    id: number,
    backdrop_path: string,
    title: string,
    overview: string,
    genre_ids: [number],
    popularity: number,
    vote_average: number,
    release_date: Date,
    poster_path: string,
    character: string,
    job: string
  }
  width: number,

}) {
  const imgLink = `https://image.tmdb.org/t/p/original/`
  return (

    <Link key={movie.id} href={`/movies/${movie.id}`} className='movie'> <button  >
      <Card style={{ width: `${width}rem`, }}>
      {movie.poster_path &&  <Card.Img variant="top" src={imgLink + movie.poster_path} />}
        <Card.Body>
          <Card.Title>  {movie.title}</Card.Title>
          {movie.character || movie.job &&<Card.Text>{movie.character || movie.job}</Card.Text>}
        </Card.Body>
      </Card>
    </button></Link>)
}