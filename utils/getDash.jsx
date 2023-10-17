const myURL = process.env.NEXT_PUBLIC_URL
const API = process.env.NEXT_PUBLIC_API
const baseLink = `https://api.themoviedb.org/3/`
const AUTH = process.env.NEXT_PUBLIC_AUTH
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: AUTH
    }
};
const headers =  {
    accept: 'application/json',
    Authorization: AUTH,
    cache: 'no-store'
  }
export async function getRecs(movie) {
    const recLink = `${baseLink}movie/${movie}/recommendations?api_key=${API}&language=en-US&page=1`
    const allMovies = await fetch(recLink, { cache: 'no-cache' }).then(res => res.json())
    const sorted = await allMovies.results.sort((a, b) => b.popularity - a.popularity)
    return sorted
}

export async function getFaves(account_id) {
    const faveLink = `${baseLink}account/${account_id}/favorite/movies?language=en-US&page=1&sort_by=created_at.desc`
    const faves = await fetch(faveLink, options).then(response => response.json())
    const {results} = faves
    const sliced = results.slice(0,3)
    return sliced
}
