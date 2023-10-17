'use client'
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react'
import { addFavorite } from "@/utils/getUser";
import Card from 'react-bootstrap/Card';

import Link from "next/link";

export default function Favorites({data,user}:{data:[{id:string,poster_path:string,title:string}],user:string}){
const imgLink = `https://image.tmdb.org/t/p/original/`
const [favorites,setFavorites] = useState([])
useEffect(()=>{
        setFavorites(data)
},[data])
const removeFave = (id:string)=>{
    const newFavorites = favorites.filter(item=>item.id !== id)
    setFavorites(newFavorites)
}
    return (
        <div className='flex flex-row flex-wrap m-5'>
            {favorites.map(movie=><div  key={movie.id} className='m-1' >
                <Card style={{ width: '8rem' }} >
     <Link href={`/movies/${movie.id}`} > <Card.Img variant="top" src={imgLink + movie.poster_path}  /></Link>
        <Card.Title>{movie.title}</Card.Title> 
        <Card.Body>
        <Button onClick={()=>{addFavorite('movie',movie.id,false,user);removeFave(movie.id)}}>Delete?</Button>
      </Card.Body>
    </Card>
        

</div>)}
        </div>
    )
} 