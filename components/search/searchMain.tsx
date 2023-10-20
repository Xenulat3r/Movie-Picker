import PeopleSearch from "./peopleSearch";
import Search from "./search";

export default function SearchMain({data}:{data:boolean}){
if(data === true){
return <Search/>
} else{
 return <PeopleSearch/>
}
}