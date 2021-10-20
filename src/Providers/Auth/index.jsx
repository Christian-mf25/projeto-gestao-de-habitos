import { createContext, useState, useContext } from "react";

export const AuthContext = createContext([]);

const initialToken = localStorage.getItem("@Productive:token");

const initialState = initialToken ? true : false;

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
