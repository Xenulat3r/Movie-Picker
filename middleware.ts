import { NextRequest, NextResponse } from 'next/server'
import { getToken } from './utils/getUser'
export async function middleware(req: NextRequest, res: NextResponse) {
  const AUTH: string = process.env.NEXT_PUBLIC_AUTH !== undefined ? process.env.NEXT_PUBLIC_AUTH : ""
  const myURL = process.env.NEXT_PUBLIC_URL
  if (req.nextUrl.pathname.startsWith('/approved')) {

    const token = req.nextUrl.searchParams.get("request_token")
    const request_token: string = token !== null ? token : ""
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: AUTH
      },
      body: JSON.stringify({ request_token })
    };

    const request = await fetch('https://api.themoviedb.org/3/authentication/session/new', options)

    const { session_id } = await request.json()

    const response = NextResponse.next()
    response.cookies.set("session", session_id)
    if (session_id) {
      return response
    } else {
      console.log(session_id)
      const request = await fetch('https://api.themoviedb.org/3/authentication/session/new', options)
        .then(res => res.json())
        .then(res => console.log(res))
      console.log(request)
      return response
    }

  }


  // if (req.nextUrl.pathname.startsWith('/login')) {
  //   const token = await getToken()
  //   console.log(token)
  //   const link = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${myURL}approved`

  //   return NextResponse.redirect(new URL(link))
  // }

  if (req.nextUrl.pathname.startsWith('/logout')) {
    const response = NextResponse.next()
    response.cookies.delete("session");

    return response
  }
}
