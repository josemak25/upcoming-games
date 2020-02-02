import React, { createContext, useReducer } from "react";
import appReducer from "./reducer";
import loadGames from "./actions";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
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

export { StoreProvider, StoreContext, loadGames };
