export interface genre {
    id: number,
    name: string
}
export interface provider {
    provider_id: number,
    provider_name: string,
    logo_path: string
}
export interface movie {
    id: number,
    title: string,
    poster_path: string,

}

export interface movieInfo {
    id: number,
    title: string,
    overview: string,
    tagline: string,
    runtime: string,
    backdrop_path: string,
    poster_path: string,
    genres: [{ id: number, name: string }]
}
export interface list {
    description: string,
    favorite_count: number,
    id: number,
    iso_639_1: string,
    list_type: string,
    name: string
}

export interface peopleResult {
    profile_path: string,
    name: string,
    id: number
}
export interface movieResult{
    media_type:string,
    id:number,
    backdrop_path:string,
    title:string,
    overview:string,
    genre_ids:[number],
    popularity:number,
    vote_average:number,
    release_date: Date,
    poster_path:string,
}
