import { getProviders, getGenres} from "@/utils/getDiscover"
import { getUserAccount } from "@/utils/getUser"
import { cookies } from 'next/headers'
import Discover from "@/components/discover/discover"
export default async function Page() {
    const cookieStore = cookies()
    const session = cookieStore.get('session')?.value
    const user = await getUserAccount(session)
    const region = user.iso_3166_1 || "US"
    const lang = user.iso_639_1 ? user.iso_639_1 +'-'+ user.iso_3166_1 : "en-us"
    const letterRatings = ["G", "PG", "PG-13", "R"]
    const providers = await getProviders(lang,region)
    const genres = await getGenres()
    const data = {providers,genres,letterRatings,lang,region}


    return (
        <main>
<Discover info={data}/>

        </main>
    )
}