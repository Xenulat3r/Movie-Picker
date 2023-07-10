import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Search from '../Search/search';
import { useAppContext } from '../../Context/links.js'
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'next/image'

export default function DiscoverNav() {
 const { showPeople, genres,usedGenres, usedProviders, letterRating, changeFilter, availGenre, availProviders ,imgLink,discoverLink, } = useAppContext()

    const [allGenres, setAllGenres] = useState<any[]>([])
    const [providers, setProviders] = useState<any[]>([])
    const letterRatings = ["G", "PG", "PG-13", "R"]
      const showRating = letterRatings.map(item => {
      return (
          <Button key={item} onClick={()=>{changeFilter('rating', item)}}   
          >{item}</Button>)
  })

  const usingFilters = letterRating.length > 0 || usedGenres.length > 0 || usedProviders.length > 0||
  showPeople.length > 0 
  useEffect(() => {
    fetch(availGenre)
        .then((res) => res.json())
        .then((data) => {
            setAllGenres(data.genres)
   
        })
    fetch(availProviders)
        .then((res) => res.json())
        .then((data) => {
            setProviders(data.results.slice(0, 15))
            
        })
    
})
  return (
    <Tabs
    defaultActiveKey="Filters"
    className="mb-3"
  >
        <Tab eventKey="Filters" title="Filters">

           {usingFilters && <h2>Click a filter to remove</h2>}
           {letterRating.length > 0 &&<div ><h2>Rating:<Button onClick={()=>{changeFilter('rating', "")}}>{letterRating}</Button></h2></div>}
           {usedGenres.length > 0 &&<div ><h2>Genres:{usedGenres}</h2></div>}
           {usedProviders.length > 0 &&<div ><h2>Watch Provider:{usedProviders}</h2></div>}
           {showPeople.length > 0 &&<div ><h2>With Cast & Crew:{showPeople}</h2></div>}
           
           
    </Tab>
    <Tab eventKey="Search" title="Search">
      <Search/>
    </Tab>
    <Tab eventKey="Rating" title="Rating">
      {showRating}
    </Tab>
    <Tab eventKey="Genre" title="Genre">
                {allGenres && allGenres.map(item => {
                    const used =genres && genres.filter(genre=> genre.id === item.id).length > 0 ? 'dark' : 'primary'
                return <Button variant={used} key={item.id} onClick={()=>{changeFilter('genre',item,'add')}}>{item.name}</Button>}
                )}
    </Tab>
    <Tab eventKey="Streaming" title="Streaming">
    {providers && providers.map(item => 
                <Button  key={item.provider_id} onClick={()=>{changeFilter('provider',item,'add')}}>
                    <Image className='filterImg' key={item.id} src={imgLink + item.logo_path} width={50} height={50} alt={item.provider_name} />
                   </Button>
                )}
    </Tab>
  </Tabs>
  )
}
