import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import Api from "../../Services/API";

export const GroupContext = createContext([]);

export const GroupProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [consultApi, setConsultApi] = useState(false);
  const token = JSON.parse(localStorage.getItem("@Productive:token"));
  useEffect(() => {
    Api.get("/groups/subscriptions/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => setData(response.data))
      .catch((err) => console.log("error: ", err));
  }, [consultApi]);

  const handleEditGroup = (info, id) => {
    Api.patch(`/groups/${id}/`, info, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((_) => toast.success("Grupo editado"))
      .catch((err) => console.log(err));
  };

  return (
    <GroupContext.Provider
      value={{ data, handleEditGroup, consultApi, setConsultApi }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => useContext(GroupContext);
