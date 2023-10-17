import Image from 'react-bootstrap/Image';
export default function Provider({data}:{data:
    {
        provider_id: number,
        provider_name: string,
        logo_path: string
    }
}){
    const imgLink = `https://image.tmdb.org/t/p/original/`

    return(
        <Image alt={data.provider_name} src={imgLink + data.logo_path} rounded />
    )
}