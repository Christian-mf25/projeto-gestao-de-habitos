import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import Api from "../../Services/API";

export const EditGroupContext = createContext();

export const EditionProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@Productive:token"));

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
    <EditGroupContext.Provider value={{ handleEditGroup }}>
      {children}
    </EditGroupContext.Provider>
  );
};

export const useEditGroup = () => useContext(EditGroupContext);
