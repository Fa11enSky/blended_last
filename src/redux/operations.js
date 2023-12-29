import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from 'service/getUserInfo';

export const fetchBaseCurrency = createAsyncThunk(
  'fetch/baseCurrency',
  async (coords, thunkApi) => {
    try {
      const data = await getUserInfo(coords);
      console.log(data);
      return data.results[0].annotations.currency.iso_code;
    } catch (error) {}
  }
);
