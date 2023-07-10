import { NextRequest, NextResponse } from 'next/server'
import cookie from 'js-cookie'


export async function middleware(req: NextRequest, res: NextResponse) {
  const response = NextResponse.next()
  
  const auth:string = process.env.auth !== undefined ? process.env.auth : ""
  
    if (req.nextUrl.pathname.startsWith('/approved')) {
        const token = req.nextUrl.searchParams.get("request_token")
        const token2:string = token !== null ? token : ""

        response.cookies.set("token",token2)
     
    const getSession =  await fetch('https://api.themoviedb.org/3/authentication/session/new', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: auth
      },
      body: JSON.stringify({request_token: token2})
    }).then(response => response.json()).then(response=>{return response})

        const session:string = getSession.session_id !== null ? getSession.session_id : ""
        response.cookies.set("id",session)

        const getDetails =  await fetch(`https://api.themoviedb.org/3/account?session_id=${session}`, {
          method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: auth
          }
        }).then(response => response.json()).then(response=>{return response})
        const avatar = getDetails.avatar
        const iso = getDetails.iso_639_1 + '-' + getDetails.iso_3166_1
        const name : string = getDetails.name !== null ? getDetails.name : ""
        const account_id : string = getDetails.id !== null ? getDetails.id : ""
        const language : string =  iso !== null ? iso :""
       const avatar1 : string = avatar.tmdb.avatar_path !== null ? avatar.tmdb.avatar_path :""
      

        response.cookies.set("language",language)
        response.cookies.set("name",name)
        response.cookies.set("account_id",account_id)
         response.cookies.set("avatar",avatar1)



      return response
}

}
