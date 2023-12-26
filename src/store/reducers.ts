import { combineReducers } from '@reduxjs/toolkit';

import { postReducer } from './post/reducers';

const combinedReducer = combineReducers({
  post: postReducer,
});

export default combinedReducer;
