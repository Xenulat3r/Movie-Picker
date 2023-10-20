import CastProfile from "@/components/pages/castProfile"
import { getCastInfo, getCastDetails } from "@/utils/getMovies"

export default async function castPage({ params }: { params: { id: string } }) {
    const {id} = params;
    const data = await getCastInfo(id)
    const {cast,crew} = await getCastDetails(id)
 
    return(
<main>
<CastProfile data={data} cast={cast} crew={crew} />  
</main>
    )
}