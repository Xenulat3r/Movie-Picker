import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useAppContext } from '@/Context/links'
import { Button } from 'react-bootstrap';
import FilteredResults from './FilteredResults'
import Search from '../Search/search'

function Filters() {
    const { showPeople, usedGenres, usedProviders, letterRating, changeFilter, availGenre, availProviders ,imgLink,discoverLink, } = useAppContext()

    const [genres, setGenres] = useState<any[]>([])
    const [providers, setProviders] = useState<any[]>([])
    const letterRatings = ["G", "PG", "PG-13", "R"]
    const showRating = letterRatings.map(item => {
      return (
          <Button key={item} onClick={()=>{changeFilter('rating', item)}}   
          >{item}</Button>)
  })
    useEffect(() => {
        fetch(availGenre)
            .then((res) => res.json())
            .then((data) => {
                setGenres(data.genres)
            })
        fetch(availProviders)
            .then((res) => res.json())
            .then((data) => {
                setProviders(data.results.slice(0, 15))
                
            })
    })
    const usingFilters = letterRating.length > 0 || usedGenres.length > 0 || usedProviders.length > 0||
                   showPeople.length > 0 

    return (
        <div className="filters">
            {usingFilters && <h1>Filtered Search:</h1>}
           
                {letterRating.length > 0 &&<div className="filter"><h1>Rating:</h1>{letterRating}</div>}
                {usedGenres.length > 0 &&<div className="filter"><h1>Genres:</h1>{usedGenres}</div>}
                {usedProviders.length > 0 &&<div className="filter"><h1>Watch Provider:</h1>{usedProviders}</div>}
                {showPeople.length > 0 &&<div className="filter"><h1>With Cast & Crew:</h1>{showPeople}</div>}
                
                

                {usingFilters && <Button className="clearButton" onClick={()=>{changeFilter('clear')}}>Clear All Filters</Button>}

                <div className="filter">{showRating}</div>
            
            <div className='filter'>
                {genres && genres.map(item => 
                <Button key={item.id} onClick={()=>{changeFilter('genre',item,'add')}}>{item.name}</Button>
                )}
            </div><div className='filter'>
                {providers && providers.map(item => 
                <Button key={item.provider_id} onClick={()=>{changeFilter('provider',item,'add')}}>
                    <Image className='filterImg' key={item.id} src={imgLink + item.logo_path} width={50} height={50} alt={item.provider_name} />
                   </Button>
                )}
            </div>

        {usingFilters && <FilteredResults/>}
        </div>
    )
}

export default Filters