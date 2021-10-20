import { createContext, useState, useEffect } from "react";
import Api from "../../Services/API";

export const GroupsContext = createContext([]);

export const GroupsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  useEffect(() => {
    Api.get(`groups/?page=${nextPage}`)
      .then((response) => {
        setData([...data, ...response.data.results]);
        setNextPage(nextPage + 1);
      })
      .catch((err) => console.log(err));
  }, [nextPage]);

  console.log(data.length);

  return (
    <GroupsContext.Provider value={{ data }}>{children}</GroupsContext.Provider>
  );
};
