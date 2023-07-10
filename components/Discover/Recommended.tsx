import Reel from "../reel"
import {useState,useEffect} from 'react'
import {useAppContext} from '@/Context/links'

export default function Recommended() {
    const context = useAppContext()
    const [data,setData] = useState([])
    const load = context.movie === "" ? false : true
    useEffect(()=>{
      if(load){
        fetch(context.recLink)
        .then((res)=>res.json())
        .then((data)=>{
            setData(data.results)
        })}
    },[load,context.recLink,context.movie])
if(data.length === 0){
  return(
    <h1>None available</h1>
  )

}else{
  return (
    <>
<h1>Recommended Based On Selection</h1>
    <Reel data={data}/>
    </>
  )}
}
