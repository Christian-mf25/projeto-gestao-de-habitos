import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/API";
import { useAuth } from "../Auth";

export const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const { token } = useAuth();
  const [group, setGroup] = useState([]);

  useEffect(() => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setGroup(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <GroupContext.Provider value={{ group }}>{children}</GroupContext.Provider>
  );
};

export const useGroup = () => useContext(GroupContext);
