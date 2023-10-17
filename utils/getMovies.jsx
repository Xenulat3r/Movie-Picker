const myURL = process.env.NEXT_PUBLIC_URL
const API = process.env.NEXT_PUBLIC_API
const baseLink = `https://api.themoviedb.org/3/`
const AUTH = process.env.NEXT_PUBLIC_AUTH

const lang = 'en-us'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: AUTH
  }
};

export async function getMovies(sort) {

  const discoverLink = `${baseLink}discover/movie?api_key=${API}&language=${lang}&sort_by=${sort}&include_adult=false&certification_country=US`
  const allMovies = await fetch(discoverLink)
  return allMovies.json()
}
export async function getNowPlaying() {

  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
  return data
}
export async function getPopularMovies(){
 const data =  await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
return data
}

export async function getTopRated(){
  const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
return data
}

export async function getUpcoming(){
  const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
  .then(response => response.json())
  return data
}
export async function getRecs(movie) {
  const recLink = `${baseLink}movie/${movie}/recommendations?api_key=${API}&language=${lang}&page=1`

  const allMovies = await fetch(recLink, { cache: 'no-cache' })
  return allMovies.json()
}

export async function getSimilar(movie) {
  const similarLink = `
${baseLink}movie/${movie}/similar?api_key=${API}&language=${lang}&page=1`
  const allMovies = await fetch(similarLink, { cache: 'no-cache' })
  return allMovies.json()
}

export async function getMovieInfo(movie) {
  const infoLink = `${baseLink}movie/${movie}?api_key=${API}&language=${lang}`
  const movieInfo = await fetch(infoLink, { cache: 'no-cache' })
  return movieInfo.json()

}

export async function getCastInfo(person_id) {
  const info = await fetch(`https://api.themoviedb.org/3/person/${person_id}?language=en-US`, options)
  return info.json()
}
export async function getCastDetails(id) {


  const info = await fetch(`https://api.themoviedb.org/3/person/${id}/combined_credits?language=en-US`, options)
  return info.json()
}

export async function getProviders(movie) {
  const link = `https://api.themoviedb.org/3/movie/${movie}/watch/providers?api_key=${API}`
  const data = await fetch((link), options)
  return data.json()
}

export async function getTrailer(id) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: AUTH
    }
  };

  const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=${lang}?api_key=${API}`, options)
  const { results } = await data.json()
  const trailerId = results.filter(item => item.site === 'YouTube')[0]
  const { key } = await trailerId || ""
  return key
}

export async function getCredits(movie) {

  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}/credits?language=en-US`, options)
    .then(res => res.json())
  return data
}