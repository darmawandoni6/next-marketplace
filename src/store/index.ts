import { HYDRATE, createWrapper } from 'next-redux-wrapper';

import { Action, AnyAction, ThunkAction, configureStore } from '@reduxjs/toolkit';

import combinedReducer from './reducers';

const reducer: typeof combinedReducer = (state, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };

    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () => configureStore({ reducer });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const wrapper = createWrapper(makeStore);
