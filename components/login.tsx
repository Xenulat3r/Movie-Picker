'use client'
import {useEffect} from 'react'
import { useRouter } from 'next/navigation'
export default function Login({token}:{token:string}){
    const router = useRouter()
    const myURL = process.env.NEXT_PUBLIC_URL 
    const link = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${myURL}approved`

router.push(link)


    return(
        <h1>Redirecting...</h1>
    )
}