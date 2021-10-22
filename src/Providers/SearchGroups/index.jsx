import { createContext, useState, useEffect } from "react";
import Api from "../../Services/API";

export const GroupsContext = createContext([]);

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    Api.get("groups/")
      .then((response) => setGroups(response.data.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <GroupsContext.Provider value={{ groups }}>
      {children}
    </GroupsContext.Provider>
  );
};
