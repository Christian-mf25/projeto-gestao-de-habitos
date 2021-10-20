import Header from "../../Components/Header";
import { GroupsContext } from "../../Providers/Groups";
import { useContext, useState } from "react";
import Api from "../../Services/API";

const SearchGroups = () => {
  const { data } = useContext(GroupsContext);
  const [input, setInput] = useState("");
  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    return JSON.parse(localToken);
  });
  const subscribe = (id) => {
    Api.post(`groups/${id}/subscribe/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => console.log("subscribed!"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header showS />
      <input
        value={input}
        placeholder="Search Group"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <ul>
        {input.length > 0
          ? data
              .filter((result) =>
                result.name.toLowerCase().includes(input.toLowerCase())
              )
              .map((filter, index) => (
                <li key={index}>
                  <h3>{filter.name}</h3>
                  <p>{filter.description}</p>
                  <span>{filter.category}</span>
                  <button onClick={() => subscribe(filter.id)}>
                    Subscribe
                  </button>
                </li>
              ))
          : data.map((result, index) => (
              <li key={index}>
                <h3>{result.name}</h3>
                <p>{result.description}</p>
                <span>{result.category}</span>
                <button onClick={() => subscribe(result.id)}>Subscribe</button>
              </li>
            ))}
      </ul>
    </>
  );
};

export default SearchGroups;
