import { createAsyncThunk } from '@reduxjs/toolkit';
import { exchangeCurrency } from 'service/exchangeCurrency';
import { getUserInfo } from 'service/getUserInfo';

export const fetchBaseCurrency = createAsyncThunk(
  'fetch/baseCurrency',
  async (coords, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedbaseCurrency = state.baseCurrency;
    console.log(state);

    if (persistedbaseCurrency) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      const data = await getUserInfo(coords);
      return data.results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
  }
);

export const fetchExchangeCurrency = createAsyncThunk('fetch/ExchangeCurrency', async (value, thunkAPI) => {
  try {
    const data = await exchangeCurrency(value)
    return data;
    
  } catch (error) {
    
  }
})