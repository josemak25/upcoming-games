import React, { useReducer, useContext, FunctionComponent } from 'react';

import useCombinedReducers from '../utils/useCombinedReducers';
import StoreContext from './types';

import userReducer, { userInitialState } from './user/reducer';
import gameReducer, { gameInitialState } from './game/reducer';
import bookMarkReducer, { bookmarkInitialState } from './bookmark/reducer';

const StoreProvider: FunctionComponent = ({ children }) => {
  const [store, dispatch] = useCombinedReducers({
    userState: useReducer(userReducer, userInitialState),
    gameState: useReducer(gameReducer, gameInitialState),
    bookMarkState: useReducer(bookMarkReducer, bookmarkInitialState)
  });

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStoreContext = () => useContext(StoreContext);

export { StoreProvider, useStoreContext };
