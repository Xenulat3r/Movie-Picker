import Reel from "../reel"
import {useState,useEffect} from 'react'
import {useAppContext} from '@/Context/links'

export default function Similar() {

    const context = useAppContext()
    const [data,setData] = useState([])
    const load = context.movie === "" ? false : true
    useEffect(()=>{
      if(load){
        fetch(context.similarLink)
        .then((res)=>res.json())
        .then((data)=>{
            setData(data.results)
        })}
    },[context.similarLink,load,context.movie])

    if(data.length === 0){
      return (
        <h1>Select a movie</h1>
      )

    } else{
  return (
    <>
<h1>Similar To Selected</h1>
    <Reel data={data}/>
    </>
  )} 
}

