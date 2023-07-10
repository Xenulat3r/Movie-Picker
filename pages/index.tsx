import DiscoverReel from '@/components/Discover/DiscoverReel'
import MovieInfo from '@/components/MovieInfo/MovieInfo'
import Similar from '@/components/Discover/Similar'
import Recommended from '@/components/Discover/Recommended'
import Filters from '@/components/Discover/Filters'
import Accordion from 'react-bootstrap/Accordion';
import Watch from '@/components/MovieInfo/Watch'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { useAppContext } from "@/Context/links"
import DiscoverNav from '@/components/Discover/DiscoverNav'


export default function Home() {
    const context = useAppContext()
    return (
        <div>
      <DiscoverNav/>
            { context.movie &&
                
           <> <MovieInfo />
        
            <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>
            <h1>Where to Watch</h1>
        </Accordion.Header>
        <Accordion.Body>
<Watch/>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>    </>
            }


       <div className="reels">
 
                       <DiscoverReel /><Similar /> <Recommended />

            </div>
        </div>
    )
}

