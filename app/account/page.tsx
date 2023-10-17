import { getFavorites, getLists, getUserAccount, } from '@/utils/getUser'
import { cookies } from 'next/headers'

import Link from 'next/link'
import List from '@/components/lists/list'
import MakeList from '@/components/account/makeList'

import MovieCarousel from '@/components/carousel'
import Favorites from '@/components/account/favorites'


export default async function Page() {
    const cookieStore = cookies()
    const session = cookieStore.get('session')?.value || ""
    const { name, id } = await getUserAccount(session)
    const { results } = await getFavorites(id)
    const lists = await getLists(id)

    return (
        <div className='flex flex-column justify-center items-center space-y-5 '>
            <h1>Hi {name}!</h1>
            <h2>Your Lists:</h2>
            <List data={lists} account={true} />

            <h3>Make New List</h3>

            <MakeList session={session} />

            <h2>Your Favorites:</h2>
            <Favorites data={results} user={id} />

            <h1><Link href={`/user/${id}`}>View your profile</Link></h1>
        </div>

    )

} 