import { createContext, useState, useEffect } from "react";
import Api from "../../Services/API";

export const GroupsContext = createContext([]);

export const GroupsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Api.get("groups/")
      .then((response) => setData(response.data.results))
      .catch((err) => console.log(err));
  });

  return (
    <GroupsContext.Provider value={{ data }}>{children}</GroupsContext.Provider>
  );
};