'use client'
import useSWR from 'swr'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from 'react'
import MovieResults from './movieResults';
import { movieResult } from '@/utils/getTypes';
export default function Search() {
    const myURL = process.env.NEXT_PUBLIC_URL
    const API = process.env.NEXT_PUBLIC_API
    const baseLink = `https://api.themoviedb.org/3/`
    const [searchQuery, setSearchQuery] = useState("")
    const [movieResults, setMovieResults] = useState<Array<movieResult>>([])
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(`${baseLink}search/movie?api_key=${API}&language=us-en&page=1&include_adult=false&query=${searchQuery}`, fetcher)
    useEffect(() => {
        if (data !== undefined) {
            const { results } = data

            setMovieResults(results)


        }
    }, [data])

    return (
        <main>
            <InputGroup className="mb-3 mt-3" >
                <Form.Control
                    autoFocus
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    as="input"
                    value={searchQuery}
                    placeholder={"Search Movie Titles"}
                    onChange={(e) => { setSearchQuery(e.target.value) }}
                />
            </InputGroup>

            {movieResults.length > 0 && <MovieResults data={movieResults} />}


        </main>
    )
}