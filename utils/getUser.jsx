const myURL = process.env.NEXT_PUBLIC_URL
const AUTH = process.env.NEXT_PUBLIC_AUTH
const baseLink = `https://api.themoviedb.org/3/`






const headers = {
  accept: 'application/json',
  Authorization: AUTH,
  cache: 'no-store'
}


export async function getUserAccount(session) {
  const data = await fetch(`https://api.themoviedb.org/3/account?session_id=${session}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: AUTH,
      cache: 'no-store'
    }
  }).then(response => response.json()).then(response => { return response })

  return data
}

export async function GetToken() {
  const options = {
    method: 'GET',
    headers,
    cache: 'no-store'
  };
  const request = await fetch(`${baseLink}authentication/token/new`, options)
  const { request_token } = await request.json()
  const link = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=http://localhost:3000/approved`
  return request_token
}


export async function getUserInfo(account) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: AUTH,
      cache: 'no-store'
    }
  };
  const getDetails = await fetch(`https://api.themoviedb.org/3/account/${account}`, options)
  const details = await getDetails.json()
  return details
}

export async function getLists(account) {
  const options = {
    method: 'GET',
    headers,
    cache: 'no-store'
  };

  const getLists = await fetch(`https://api.themoviedb.org/3/account/${account}/lists?page=1`, options)
  const { results } = await getLists.json()
  return results
}

export async function getFavorites(account) {
  const options = {
    method: 'GET',
    headers,
    cache: 'no-store'
  };

  const data = await fetch(`${baseLink}account/${account}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`, options)
  return data.json()
}

export async function addFavorite(media_type, media_id, favorite, account) {


  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: AUTH,
    },
    body: JSON.stringify({ media_type, media_id, favorite })
  };

  const data = await fetch(`https://api.themoviedb.org/3/account/${account}/favorite`, options)
    .then(res => res.json())
  return data
}

export async function checkFavorite(movie_id, session_id) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: AUTH,
      cache: 'no-store'
    }
  };

  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/account_states?session_id=${session_id}`, options)
  return data.json()
}
export async function getToken() {
  const options = {
    method: 'GET',
    headers,
    cache: 'no-store'
}

  const { request_token } = await fetch('https://api.themoviedb.org/3/authentication/token/new', options)
    .then(response => response.json())
  return request_token
}