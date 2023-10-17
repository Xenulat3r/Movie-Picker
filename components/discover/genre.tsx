export default function Genre({data}:{data:{
    id: number,
    name: string
}}){
    return (
        <div>{data.name}</div>
    )
}