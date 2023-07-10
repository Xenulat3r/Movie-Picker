'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { List } from "@/components/list";

'use server';
 
import cookie from 'js-cookie'
import { redirect } from 'next/navigation'
const UserContext = createContext();

export function UserProvider({ children }) {
  const auth = process.env.auth
  const [favorites, setFavorites] = useState([])
  const [movieStatus,setMovieStatus] = useState({})
  const [token, setToken] = useState('')
  const [lists,setLists] = useState([])
  const sessionId =cookie.get('id')
  const account = cookie.get('account_id')
  const name = cookie.get('name')
  const avatar = cookie.get('avatar')
  const API = process.env.api
  const baseLink = `https://api.themoviedb.org/3/`
  const tokenLink = `
  ${baseLink}authentication/token/new?api_key=${API}`
  const sessionLink = `${baseLink}authentication/session/new?api_key=${API}`

  const headers =  {
    accept: 'application/json',
    Authorization: auth
  }

   function getToken() {
    const options = {
      method: 'GET',
      headers
    };
    fetch(`${baseLink}authentication/token/new`,  options)
      .then(response => response.json())
      .then(response => window.location.replace(`https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=http://localhost:3000/approved`))
      .catch(err => console.error(err));

  }


function isFavorite (movie){ 
  const fave = favorites.filter(item =>item.id === movie).length > 0?  false : true
  return <button onClick={()=>addFavorite("movie",movie,fave)}>{fave ? `<3`:`</3` }</button>

}

  function addFavorite(media_type,media_id,favorite){

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDkzOTVlMjUwMzViNDdiN2RlZDNmZDVhOGRiYjhiYyIsInN1YiI6IjYyZWQ5OGI0N2Q1NTA0MDA3YmI2NGQ4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._hIns-0CEgnfXu03uYgfEyy3gWhg5quT5YHE92A2Tyc'
      },
       body: JSON.stringify({media_type, media_id, favorite})
    };
   
    fetch(`https://api.themoviedb.org/3/account/${account}/favorite`, options)
      .catch(err => console.error(err));
  }

  function getFavorites(){
    const options = {
      method: 'GET',
      headers
    };
    
    fetch(`${baseLink}account/${account}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`, options)
      .then(response => response.json())
      .then(response => setFavorites(response.results))
      .catch(err => console.error(err));
  }

  function getMovieStatus(movie){
    let isFave = false;    const options = {
      method: 'GET',
      headers
    };
    
    fetch(`${baseLink}movie/${movie}/account_states?session_id=${sessionId}`, options)
      .then(response => response.json())
      .then(response => {setMovieStatus(response)})
      .catch(err => console.error(err));
return isFave

  }

function logout(){
  cookie.remove('token')
  cookie.remove('account_id')
  cookie.remove('name')
  cookie.remove('language')
  cookie.remove('avatar')
  cookie.remove('sessionId')
  window.location.replace('/')
}


const [listItems,setListItems] = useState([])
async function getLists(){
  const options = {
    method: 'GET',
    headers
  };
  
await fetch(`${baseLink}account/${account}/lists?page=1`, options)
    .then(response => response.json())
    .then(response => {return setLists(response.results)
    })
    .catch(err => console.error(err));

}

async function getListItems(id){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: auth
    }
  };

await fetch(`https://api.themoviedb.org/3/list/${id}?language=en-US`, options)
 .then(response => response.json())
    .then(response=>{ 
      setListItems(response)
    })
}


function addToList(id,media_id){
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: auth
    },
    body: JSON.stringify({media_id})
  };
  
  fetch(`https://api.themoviedb.org/3/list/${id}/add_item?session_id=${sessionId}`, options)
    .catch(err => console.error(err));
}

function deleteList(id){
  const options = {
    method: 'DELETE',
    headers: {
      accept: 'application/json',
      Authorization: auth
    }
  };
  
  fetch(`https://api.themoviedb.org/3/list/${id}?session_id=${sessionId}`, options)
    .catch(err => console.error(err));
}

function clearList(id){

   const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      Authorization: auth
    }
  }; 
  fetch(`https://api.themoviedb.org/3/list/${id}/clear?session_id=${sessionId}&confirm=true`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

}

function removeFromList(id,media_id){
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization:auth
    },
    body: JSON.stringify({ media_id })
  };
  
  fetch(`https://api.themoviedb.org/3/list/${id}/remove_item?session_id=${sessionId}`, options)
    .catch(err => console.error(err));
}

function check(id,movie_id){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: auth
    }
  };
  
  fetch(`https://api.themoviedb.org/3/list/${id}/item_status?language=en-US&movie_id=${movie_id}`, options)
    .catch(err => console.error(err));
}

function createList(name){
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: auth
    },
    body: JSON.stringify({
      name,
      description: '',
      language: 'en'
    })
  };
  
  fetch(`https://api.themoviedb.org/3/list?session_id=${sessionId}`, options)
    .catch(err => console.error(err));
}

  return (
    <UserContext.Provider value={{
      account,
      token,
      sessionId,
      getToken,
      addFavorite,
      favorites,
      getFavorites,
      isFavorite,
      name,
      avatar,
      movieStatus,
      getMovieStatus,
      logout,
      lists,
      getLists,
      getListItems,
      listItems,

      addToList,
      deleteList,
      createList,
      check,
      getLists,
      clearList,
      removeFromList,





    }}>

      {children}


    </UserContext.Provider>
  );
}

export function useSessionContext() {
  return useContext(UserContext);
}
