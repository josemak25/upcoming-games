import { createContext, Dispatch } from 'react';

import { userInitialState } from './user/reducer';
import { gameInitialState } from './game/reducer';

import { UserInitialState, UserAction } from './user/types';
import { GameInitialState, GameAction } from './game/types';

// We define our type for the context properties right here
type DispatchTypes = UserAction | GameAction;

// We define our type for the context properties right here
interface ContextProps {
  store: {
    userState: UserInitialState;
    gameState: GameInitialState;
  };
  dispatch?: Dispatch<DispatchTypes>;
}

const StoreContext = createContext<ContextProps>({
  store: {
    userState: userInitialState,
    gameState: gameInitialState
  }
});

export default StoreContext;
