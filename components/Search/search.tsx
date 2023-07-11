import Image from 'next/image'
import { Inter } from 'next/font/google'
import Reel from '@/components/reel'
import PeopleSearch from '@/components/Search/peopleSearch'
import MovieSearch from '@/components/Search/movieSearch'
import { useAppContext } from "@/Context/links"
import { useState, useEffect, useContext,useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Search() {
    const { movie, changeMovie, discoverLink, setQuery,peopleQuery,searchQuery} = useAppContext()
    const imgLink = `https://image.tmdb.org/t/p/original`
    const baseLink = `https://api.themoviedb.org/3/`
    const API = "5d9395e25035b47b7ded3fd5a8dbb8bc"

    const [discover,setDiscover] = useState([])
    const [movieResults,setMovieResults] = useState([])
    const [peopleResults,setPeopleResults] = useState([])
    const [genres, setGenres] = useState([])
    const [people, setPeople] = useState([])
    const [providers, setProviders] = useState([])
    const [letterRating, setLetterRating] = useState("")

    const movieSearchLink = `${baseLink}search/movie?api_key=${API}&language=us-en&page=1&include_adult=false&query=${searchQuery}`
    const peopleSearchLink = `${baseLink}search/person?api_key=${API}&language=us-en&page=1&include_adult=false&query=${peopleQuery}`
    const [movies,setMovies] = useState(true)
    const searchRef = useRef<HTMLInputElement>(null);
    

    useEffect(() => {
        fetch(discoverLink)
            .then((res) => res.json())
            .then((data) => {
                setDiscover(data.results)
            })

        fetch(peopleSearchLink)
            .then((res) => res.json())
            .then((data) => {
                setPeopleResults(data.results)
            });
        fetch(movieSearchLink)
            .then((res) => res.json())
            .then((data) => {
                setMovieResults(data.results)
            })

   
            }, [discoverLink,movieSearchLink,peopleSearchLink]);



        return (
            <div className='filter'>
            
<h2>{movies? 'Searching Movies' : 'Searching People'}</h2>
        {movies ? 
                    <Button variant="outline-secondary" className='searchButton' onClick={()=>{setMovies(!movies);searchRef.current?.focus();setQuery("search", '');}}>Switch to People Search?</Button>:
                    <Button variant="outline-secondary" className='searchButton'  onClick={()=>{setMovies(!movies);searchRef.current?.focus();setQuery("people", '');}}>Switch to Movie Search?</Button>}
<InputGroup className="mb-3" >

        <Form.Control
          autoFocus
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          as="input"
          ref={searchRef} 
          value={ movies ? searchQuery : peopleQuery}
          placeholder={movies ? "Search Movie Titles":"Search Cast & Crew"}
          onChange={e => { movies ?  setQuery("search", e.target.value) : setQuery("people",e.target.value)} }
          
        />
      </InputGroup>
      <div className='results'>
{ movies ?      <MovieSearch data={movieResults}  /> :<PeopleSearch data={peopleResults}/> }
</div>
            </div>
        )
    }


