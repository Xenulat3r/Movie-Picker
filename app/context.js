'use client'
import { createContext, useContext, useState } from 'react';
import {getMovies,getRecs,getSimilar} from '@/utils/getMovies'
const MovieContext = createContext();
export async function MovieContextProvider({children}){
    const [movie,setMovie] = useState('movie will go here')

    function changeMovie(input){
        setMovie(input)
    }
    const {results} =  await getMovies()

    return(
        <MovieContext.Provider  value={{
            movie,
            changeMovie,
            results
        }}>
        {children}
        </MovieContext.Provider>


    )
}

export function useMovieContext() {
    return useContext(MovieContext);
  }