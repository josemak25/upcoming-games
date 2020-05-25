import { createContext, Dispatch } from 'react';

import { userInitialState } from './user/reducer';
import { gameInitialState } from './game/reducer';
import { bookmarkInitialState } from './bookmark/reducer';

import { UserInitialState, UserAction } from './user/types';
import { GameInitialState, GameAction } from './game/types';
import { BookmarkInitialState, BookmarkAction } from './bookmark/types';

// We define our type for the context properties right here
export type DispatchTypes = UserAction | GameAction | BookmarkAction;

// We define our type for the context properties right here
interface ContextProps {
  store: {
    userState: UserInitialState;
    gameState: GameInitialState;
    bookMarkState: BookmarkInitialState;
  };
  dispatch?: Dispatch<DispatchTypes>;
}

const StoreContext = createContext<ContextProps>({
  store: {
    userState: userInitialState,
    gameState: gameInitialState,
    bookMarkState: bookmarkInitialState
  }
});

export default StoreContext;
