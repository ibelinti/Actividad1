import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAutenticated] = useState(false);
  const login = () => {
    setIsAutenticated(true);
  };
  const logout = () => {
    setIsAutenticated(false);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
