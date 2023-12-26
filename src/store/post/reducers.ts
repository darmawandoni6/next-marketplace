import { createReducer } from '@reduxjs/toolkit';

import postAction from './actions';
import type { PostState } from './types';

const initialState: PostState = {
  fetch: {
    loading: false,
    data: [],
    error: '',
  },
};
export const postReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(postAction.fetchData.pending, (state) => {
      return {
        ...state,
        fetch: {
          ...state.fetch,
          loading: true,
        },
      };
    })
    .addCase(postAction.fetchData.fulfilled, (state, { payload }) => {
      return {
        ...state,
        fetch: {
          ...state.fetch,
          loading: false,
          data: payload,
        },
      };
    })
    .addCase(postAction.fetchData.rejected, (state, { error }) => {
      return {
        ...state,
        fetch: {
          ...state.fetch,
          loading: false,
          error: error.message ?? '',
          data: [],
        },
      };
    });
});
