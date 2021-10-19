import { createContext, useState, useContext } from "react";

export const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const [group, setGroup] = useState([]);

  return (
    <GroupContext.Provider value={{ group, setGroup }}>
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => useContext(GroupContext);
