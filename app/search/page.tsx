'use client'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from 'react'
import Search from '@/components/search/search';
import PeopleSearch from '@/components/search/peopleSearch';
import { Button } from 'react-bootstrap';
import SearchMain from '@/components/search/searchMain';


export default function Page() {
const [movies,setMovies] = useState<boolean>(true)

  return (

    <main className='mt-3 text-center'>

    <h1>Searching {movies ? "Movies" : "People"}</h1>
    {movies ? <Button onClick={()=>setMovies(false)}>Search People?</Button>:
<Button onClick={()=>setMovies(true)}>Search Movies?</Button>}
<SearchMain data={movies}/>
    </main>

  );
}