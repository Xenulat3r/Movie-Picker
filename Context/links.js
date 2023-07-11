'use client';

import { createContext, useContext, useState } from 'react';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import cookie from 'js-cookie'
const ApiContext = createContext();

export function LinkProvider({ children }) {
  const auth = process.env.auth
  const [genres, setGenres] = useState([])
  const [people, setPeople] = useState([])
  const [providers, setProviders] = useState([])
  const [letterRating, setLetterRating] = useState("")
  const [movie, setMovie] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [peopleQuery, setPeopleQuery] = useState("")
  const [trailerId,setTrailerId] = useState('')
  const genreList = genres.map(item=>item.id)
  const providerList = providers.map(item=>item.provider_id)
  const peopleList = people.map(item=>item.id)
  const lang = cookie.get('language') || 'en-us'

  const region = `&watch_region=US`

  function setQuery(type, input) {
    switch (type) {
        case 'people':
            setPeopleQuery(input)
            break;
        case 'search':
            setSearchQuery(input)
            break;

        default:
            break;
    }

}


  const myURL = process.env.url
  const API = process.env.api
  const baseLink = `https://api.themoviedb.org/3/`
  const linkGenre = genres.length > 0 ? `&with_genres=` + genreList : ''
  const linkPeople = people.length > 0 ? `&with_people=` + peopleList : ''
  const linkProviders = providers.length > 0 ? `&with_watch_providers=` + providerList : ''
  const linkRate = letterRating ? `&certification=` + letterRating : ''
  const discoverLink = `${baseLink}discover/movie?api_key=${API}&language=${lang}&sort_by=popularity.desc&include_adult=false&certification_country=US${linkRate}${linkGenre}${linkPeople}${linkProviders}${region}`
  const recLink = `${baseLink}movie/${movie}/recommendations?api_key=${API}&language=${lang}&page=1`
  const similarLink = `
${baseLink}movie/${movie}/similar?api_key=${API}&language=${lang}&page=1`
  const imgLink = `https://image.tmdb.org/t/p/original/`
  const infoLink = `${baseLink}movie/${movie}?api_key=${API}&language=${lang}`
  const availProviders = `${baseLink}watch/providers/movie?api_key=${API}&language=${lang}&${region}`
  const availGenre = `${baseLink}genre/movie/list?api_key=${API}&language=${lang}`

  const tokenLink = `
${baseLink}authentication/token/new?api_key=${API}`
  const sessionLink = `${baseLink}authentication/session/new?api_key=${API}`
  
  const showPeople = people !== undefined ? people.map(item=><Button key={item.id} onClick={()=>changeFilter('people',item,'delete')}>{item.name}</Button>) : ""
  const usedGenres = genres.map(item=><Button key={item.id} onClick={()=>changeFilter('genre',item,'delete')}>{item.name}</Button>)
  const usedProviders = providers.map(item=><Button key={item.id}><Image  src={imgLink + item.logo_path} width={50} height={50} onClick={()=>changeFilter('provider',item,'delete')} alt={item.provider_name} /></Button>)

  function changeMovie(id){
    setMovie(id)
  }

  function changeFilter(type,input,action){
    switch (type) {
      case 'genre':
        if(action === "delete"){
          setGenres(genres.filter(item=>item.id !== input.id))
        }else if(action ==="add"){
          if(genres.filter(item=>item.id === input.id).length === 0){
          setGenres([...genres,input])}
        }
        break;
      case 'people':
        if(action ==="delete"){
          setPeople(people.filter(item=> item.id !== input.id))
        }else if(action ==="add"){
          if(people.filter(item=>item.id ===input.id).length ===0){
          setPeople([...people,input])}
        }
        
        break;
  
        case 'provider':
          if(action==="delete"){
            setProviders(providers.filter(item=> item.id !==input.id))
          }else if(action ==="add"){
            if(providers.filter(item=>item.id === input.id).length === 0){
            setProviders([...providers,input])}
          }
        
        break;
  
        case 'rating':
          setLetterRating(input)
  
        break;
        case 'clear':
          setProviders([])
          setLetterRating('')
          setPeople([])
          setSearchQuery('')
          setPeopleQuery('')
          setGenres([])
    
      default:
        break;
    }
  
  }
function getTrailer(id){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: auth
    }
  };
  
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=${lang}`, options)
    .then(response => response.json())
    .then(response =>{
      const {results} = response
      
      const id = results.filter(item=> item.site === 'YouTube')[0].key
      
      setTrailerId(id)})
    .catch(err => console.error(err));
}


const getMovieProviders = `https://api.themoviedb.org/3/movie/${movie}/watch/providers?api_key=${API}`
const [movieProviders,setMovieProviders] = useState({})
function getProviders(id){
  console.log(id)
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: auth
    }
  };
  
{id !== undefined &&  fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${API}`, options)
    .then(response => response.json())
    .then(response => {setMovieProviders(response)})
    .catch(err => console.error(err));
}}

  return (
    <ApiContext.Provider value={{
      discoverLink,
      recLink,
      similarLink,
      availProviders,
      availGenre,
      tokenLink,
      changeMovie,
      movie,
      infoLink,
      imgLink,
      changeFilter,
      showPeople,
      usedGenres,
      usedProviders,
      letterRating,
      setLetterRating,
      setQuery,
      peopleQuery,
      searchQuery,
      getTrailer,
      trailerId,
      getProviders,
      movieProviders,
      getMovieProviders




    }}>

      {children}


    </ApiContext.Provider>
  );
}

export function useAppContext() {
  return useContext(ApiContext);
}