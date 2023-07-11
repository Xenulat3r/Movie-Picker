import Image from 'next/image'
import { useAppContext } from '@/Context/links'



export default function PeopleSearch({ data}) {

  const {changeFilter,setQuery,imgLink} = useAppContext()

    const peopleResults = data.filter(item=>item.profile_path  !==null )
    return( 
        <div className="movies">
              {peopleResults.map(item =>
                <button className="movie" key={item.id} onClick={() => {changeFilter('people',item,'add');setQuery('people','');window.scrollTo(0,350);}}>
                  <Image src={imgLink + item.profile_path} alt={item.name} width={75} height={150} />
                  <h1>{item.name}</h1>
                </button>
                
           ) }
              
        </div> )

  


}
