import { createContext, useState, useContext } from "react";

export const AuthContext = createContext([]);

const initialToken = localStorage.getItem("token");

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

// export const GroupsContext = createContext([]);

// export const GroupsProvider = ({ children }) => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     Api.get("groups/")
//       .then((response) => setData(response.data.results))
//       .catch((err) => console.log(err));
//   });

//   return (
//     <GroupsContext.Provider value={{ data }}>{children}</GroupsContext.Provider>
//   );
// };
