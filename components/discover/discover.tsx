'use client'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import useSWR from 'swr'
import Movies from './movies'
import Genre from './genre'
import Provider from './provider'
import {provider,genre,movie} from'@/utils/getTypes'
export default function Discover({ info }: {
    info:
    {
        region: string,
        lang: string,
        letterRatings: string[],
        providers: [
            {
                provider_id: number,
                provider_name: string,
                logo_path: string
            }
        ],
        genres: [{
            id: number,
            name: string
        }]

    }
}) {

    const [movies, setMovies] = useState<Array<movie>>([])
    const [genres, setGenres] = useState<Array<genre>>([])
    const [providers, setProviders] = useState<Array<provider>>([])
    const [rating, setRating] = useState<String>('')
    const baseLink = `https://api.themoviedb.org/3/`
    const API = process.env.NEXT_PUBLIC_API
    const linkGenre = genres ? `&with_genres=` + genres.map((item:any) => item.id) : ''
    const linkProviders = providers ? `&with_watch_providers=` + providers.map((item:any) => item.provider_id) : ''
    const letterRating = rating ? '&certification=' + rating : ''
    const discoverLink = `${baseLink}discover/movie?api_key=${API}&language=${info.lang}&sort_by=popularity.desc&include_adult=false&certification_country=${info.region}${letterRating}${linkGenre}${linkProviders}`
    const emptyFilters = rating === "" && genres.length === 0 && providers.length === 0 ? true : false
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR(discoverLink, fetcher)
    useEffect(() => {
        if (data) {
            setMovies(data.results)
        }

    }, [data, error])


    return (
        <div>
            <Card >

                <Card.Body>
                    <Card.Title>Selected filters:</Card.Title>
                    {emptyFilters && <h4>Start selecting filters!</h4>
                    }

                    {rating &&
                        <div>Rated:<br /><Button onClick={() => setRating("")}>{rating}</Button></div>}


                    {genres.length > 0 &&
                        <div> Genres:<br />{genres.map((item:{id:number,name:string}) =>
                            <Button key={item.id} onClick={() => setGenres(genres.filter((genre:{id:number}) => genre.id !== item.id))} >{item.name}</Button>
                        )}</div>}


                    {providers.length > 0 &&
                        <div>Watch Providers:<br />
                            {providers.map((item:{provider_id:number, logo_path:string, provider_name:string}) =>
                                <button key={item.provider_id} onClick={() => setProviders(providers.filter((provider:{provider_id:number}) => provider.provider_id !== item.provider_id))}>
                                    <Provider data={item} />
                                </button>
                            )}</div>}



                    <Button onClick={() => { setProviders([]); setGenres([]); setRating("") }}>Clear All</Button>
                </Card.Body>
            </Card>


            <Card>
                <Card.Body>
                    <Tabs
                        className="mb-3"
                        variant="pills"
                        fill
                    >
                        <Tab eventKey="Rating" title="Rating">
                            <div className="text-center">
                                <ButtonGroup aria-label="Rating" >
                                    {info.letterRatings.map((item:any) =>
                                        <Button key={info.letterRatings.indexOf(item)} onClick={() => setRating(item)} variant="secondary">
                                            {item} </Button>
                                    )}
                                </ButtonGroup>
                            </div></Tab>
                        <Tab eventKey="Genres" title="Genres">
                            <Card.Text>


                                {info.genres.map((item:any) =>
                                    <Button className="p-2 m-2" key={item.id} onClick={() => { !genres.includes(item) && setGenres([...genres, item]) }} variant="secondary">{item.name}</Button>
                                )}

                            </Card.Text></Tab>
                        <Tab eventKey="providers" title="Providers">
                            <Card.Text>


                                {info.providers.map((item:any) => <button key={item.provider_id} onClick={() => { providers.indexOf(item) === -1 && setProviders([...providers, item]) }}>
                                    <Provider data={item} />
                                </button>
                                )}
                            </Card.Text></Tab>
                    </Tabs>
                </Card.Body>
            </Card>


            {movies.length > 0 ? <Movies movies={movies} /> :
                <h1 className='m-3'>Looks like your request was too niche, None found!</h1>
            }




        </div>
    )




}