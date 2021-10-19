import { GroupsContext } from "../../Providers/Groups";
import { useContext } from "react";

const Groups = ({isFiltered, input, setIsFiltered}) => {
    const {data} = useContext(GroupsContext);
               
    if(isFiltered){ return (
        <ul>
            {data.filter(result => result.name.toLowerCase() === input.toLowerCase()) 
            ?.map((filter, index) => (
            <li key={index}>
                <h3>{filter.name}</h3>
                <p>{filter.description}</p>
                <span>{filter.category}</span>
                <button>Subscribe</button>
            </li>))}
        </ul>
    )}
    return (
        <ul>{data.map((result, index) => (
            <li key={index}>
                <h3>{result.name}</h3>
                <p>{result.description}</p>
                <span>{result.category}</span>
                <button>Subscribe</button>
            </li>))}
        </ul>
    )
}

export default Groups;