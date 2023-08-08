



import { useContext, createContext } from "react";

const UseAuthContext = createContext();

export function AuthProvider({ children, value }) {
  return <UseAuthContext.Provider value={value}>{children}</UseAuthContext.Provider>;
}

export function useAuthValue() {
  return useContext(UseAuthContext);
}