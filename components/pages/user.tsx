'use client'
import Carousel from 'react-bootstrap/Carousel';

export default function User({ data, faves }: { data: { username: string, avatar: { tmdb: { avatar_path: string } } }, faves: [{ backdrop_path: string, id: number, title: string }] }) {
    const imgLink = `https://image.tmdb.org/t/p/original/`


    return (<div>

        <Carousel
            fade
            indicators={false}
            pause='hover'
            keyboard
            prevIcon={''}
            nextIcon={''}
            wrap={true}
            touch={true}

        >

            {faves.map(fave =>
                <Carousel.Item key={fave.id}>
                    <div className="selectedMovie" style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${fave.backdrop_path})`
                    }}>
                        <div className="movieInfoBackground">
<h1>{data.username}</h1>
                            <div className='userBanner'>
                                
                                <div className="userPortrait" style={{
                                    backgroundImage: `url(${imgLink}${data.avatar.tmdb.avatar_path})`
                                }} /> 
                            </div>




                        </div>
                    </div>
                </Carousel.Item>
            )}

        </Carousel></div>
    );



}