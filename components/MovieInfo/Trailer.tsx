'use client'
import YouTube, { YouTubeProps } from 'react-youtube';
export default function Trailer({data}){


    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.playVideo();
      }
    
      const opts: YouTubeProps['opts'] = {
     
        width: '450',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    
      return <YouTube videoId={data} opts={opts} onReady={onPlayerReady} />;
    }
  


