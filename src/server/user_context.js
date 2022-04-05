import React, { useContext, createContext, useState } from "react";

const Context = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState();
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
}

// value에 있는 값에 접근
export function useUserContext() {
  return useContext(Context);
}
