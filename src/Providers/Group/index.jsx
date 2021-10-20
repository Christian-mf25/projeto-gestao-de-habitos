import { createContext, useState, useEffect } from "react";
import Api from "../../Services/API";

export const GroupContext = createContext([]);

export const GroupProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const token = JSON.parse(localStorage.getItem("@Productive:token"));
  useEffect(() => {
    Api.get("/groups/subscriptions/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => setData(response.data))
      .catch((err) => console.log("error: ", err));
  });

  return (
    <GroupContext.Provider value={{ data }}>{children}</GroupContext.Provider>
  );
};
