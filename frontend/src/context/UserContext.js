import { createContext, useContext, useEffect, useState } from "react";
import { isTokenExpired } from "../utils/utils";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userContextLoading, setUserContextLoading] = useState(true);

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user?.token;
console.log(isTokenExpired(token));
      if (!user) {
        setUserContextLoading(false);
        return;
      }
      if (token && !isTokenExpired(token)) {
        setCurrentUser(user);
        setUserContextLoading(false);
      } else {
        signOut();

        setUserContextLoading(false);
        alert("Session expired. Please sign in again.");
      }
    } catch (error) {
      alert(error?.message);
    }
  }, []);


  const signUp = (userInfo) => {
    setCurrentUser(userInfo);
  };

  const signIn = (userInfo) => {
    setCurrentUser(userInfo);
  };

  const signOut = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
  };
  return (
    <UserContext.Provider
      value={{ currentUser, signUp, signIn, signOut, userContextLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
