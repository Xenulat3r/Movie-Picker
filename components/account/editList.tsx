'use client'
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import { clearList, deleteList, removeFromList } from "@/utils/getLists"
import Link from 'next/link';
import Movie from '../movie';
export default function List({ list, items, token }:
  {
    list:
    {
      name: string,
      description: string,
      id: number
    },
    items: [
      {
        id:number,
        poster_path:string,
        title:string,
        overview:string,
        vote_average:number,
      }],
     token: string
  }) {

  const router = useRouter();
  const [listItems, setListItems] = useState([])
  useEffect(() => {
    const newItems = items.filter(item => item.poster_path !== undefined)
    setListItems(newItems)

  }, [items])
  function removeItem(id: string) {
    const newList = listItems.filter(item => item.id !== id);
    setListItems(newList);
  }

  function clearItems() {
    setListItems([])
  }

  return (
    <div className='list' >

      <h1>{list.name}</h1>
      <h2>{list.description}</h2>
<div className='favMovies'>



      {listItems?.map(movie => <div className="favMovie" key={movie.id} >
        <Movie movie={movie} width={10} className='movie' />
        
        <div className="max-w-md mr-2 flex flex-column description">
          <p>{movie.overview}</p>
          <h5 className='text-center'>{movie.vote_average}/10</h5>
          <Button  onClick={() => { removeFromList(list.id, movie.id, token); removeItem(movie.id) }}>Delete?</Button>

        </div>

      </div>)}
</div>
      {items !== undefined &&
        <div className="m-2 p-1 text-center">
          <Button className="m-1 p-3 text-center" onClick={() => { clearList(list.id, token); clearItems() }}>Clear All Items?</Button>
          <Button className="m-1 p-3 text-center" onClick={() => { deleteList(list.id, token); router.push('/account') }} >Delete List?</Button>
        </div>
      }
    </div>
  )
}