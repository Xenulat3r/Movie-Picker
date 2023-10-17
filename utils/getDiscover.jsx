const myURL = process.env.NEXT_PUBLIC_URL
const API = process.env.NEXT_PUBLIC_API
const baseLink = `https://api.themoviedb.org/3/`
const AUTH = process.env.NEXT_PUBLIC_AUTH

const lang = 'en-us'
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: AUTH,
    store:'no-store' }
  };

export async function getProviders(lang,region){
    const link = `${baseLink}watch/providers/movie?api_key=${API}&language=${lang}&region=${region}`
    const data = await fetch(link,options).then(res=>res.json())
    const filtered = await data.results
        .filter(item=>item.display_priorities.hasOwnProperty(region))
        .sort((a,b) => a.display_priorities[region] - b.display_priorities[region])
        
    const sliced = await filtered.slice(0,20)

    return sliced

}
export async function getGenres(){
    const link = `${baseLink}genre/movie/list?api_key=${API}&language=${lang}`
    const data = await fetch(link,options).then(res=>res.json())
    const {genres} = data
    return genres
}

