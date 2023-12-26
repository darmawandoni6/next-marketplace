import { AxiosError } from 'axios';

import httpService from '@helpers/httpService';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '..';
import type { FetchParams } from './types';

const postAction = {
  fetchData: createAsyncThunk('data/fetchData', async (arg: FetchParams, { getState, rejectWithValue }) => {
    const { post } = getState() as RootState;

    if (post.fetch.data[0] && !arg.reFetch) {
      return post.fetch.data;
    }

    try {
      const res = await httpService.get('/users');
      return res.data;
    } catch (error) {
      const e = error as AxiosError;
      if (e.response) return rejectWithValue(e.response.data);
      throw e;
    }
  }),
};
export default postAction;
