const myURL = process.env.NEXT_PUBLIC_URL
const API = process.env.NEXT_PUBLIC_API
const baseLink = `https://api.themoviedb.org/3/`

export async function getMovies(searchQuery){
const movieSearchLink = `${baseLink}search/movie?api_key=${API}&language=us-en&page=1&include_adult=false&query=${searchQuery}`
const {results} = await fetch(movieSearchLink).then((res) => res.json())
return results
}
export async function getCast(peopleQuery){
const peopleSearchLink = `${baseLink}search/person?api_key=${API}&language=us-en&page=1&include_adult=false&query=${peopleQuery}`
const {results} = await fetch(peopleSearchLink).then((res) => res.json())
return results
}


