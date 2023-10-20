'use client'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Carousel from 'react-bootstrap/Carousel';
import { use, useState } from 'react'
import MovieCarousel from './carousel';
import Link from 'next/link';
export function HomePage({ data }: {
    data: {
        popular: {
            results: [{
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
            }]
        },
        upcoming: {
            results: [{
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
            }]
        },
        nowPlaying: {
            results: [{
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
            }]
        }
    }
}) {
    const [show, setShow] = useState(false)
    return (
        <main className="text-center">
            <h1>Popular Right Now:</h1>
            <Carousel
                fade
                indicators={false}
                pause='hover'
                keyboard
                wrap={true}
                touch={true}

            >

                {data.popular.results.map((movie:any) =>

                    <Carousel.Item key={movie.id}><Link href={`/movies/${movie.id}`}>
                        <div className="selectedMovie" style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
                        }}>
                            <div className="movieInfoBackground">
                                <h1>{movie.title}</h1>


                            </div>
                        </div>
                    </Link> </Carousel.Item>
                )}


            </Carousel>

            <div className='mt-5 m-2'>

                <ButtonGroup>
                    <Button className='p-3' variant={show ? "secondary" : "primary"} onClick={() => setShow(false)}>Upcoming</Button>
                    <Button className='p-3' variant={show ? "primary" : "secondary"} onClick={() => setShow(true)}>Now Playing</Button>
                </ButtonGroup>
                {show ?
                    <MovieCarousel movies={data.nowPlaying.results} /> :
                    <MovieCarousel movies={data.upcoming.results} />
                }

                <Button className='p-3' href={`/discover`}>
                    <h1>Want More Options?</h1>
                </Button>
            </div>

        </main>
    )
}