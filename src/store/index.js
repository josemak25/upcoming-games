import React, { createContext, useReducer } from "react";
import appReducer from "./reducer";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const initialState = {
    isLoading: true,
    games: [],
    error: null
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };
