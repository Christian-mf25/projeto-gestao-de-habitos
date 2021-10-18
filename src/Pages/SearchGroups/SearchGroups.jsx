import Header from "../../Components/Header";
import { GroupsContext } from "../../Providers/Groups/groups";
import {useContext} from "react";


const SearchGroups = () => {
    const {data} = useContext(GroupsContext);

    return (
        <>
            <Header showS/>
            <input placeholder="Search Group"></input>
            <button>Search</button>
            <ul>
                {data.map((result, index) => (
                    <li key={index}>
                        <h3>{result.name}</h3>
                        <p>{result.description}</p>
                        <span>{result.category}</span>
                        <button>Subscribe</button>
                    </li>))}
            </ul>
        </>
    );
}

export default SearchGroups;