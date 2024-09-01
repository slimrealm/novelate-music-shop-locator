import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface ShopsListState {
  fetchedData: any;
  isLoading: boolean;
  error: string | null;
}

const NOVELATE_BASE_URL = process.env.REACT_APP_NOVELATE_BASE_URL;
const NOVELATE_API_KEY = process.env.REACT_APP_NOVELATE_API_KEY;

export const fetchShops = createAsyncThunk('shopsList/fetchShops', async () => {
  // need to switch hard-coded coords to user's device location
  const latitude = "39.7283";
  const longitude = "-121.8380";
  const maxRadius = "1000";
  const topNumRows = "10";
  try {
    const response = await axios.get(
      `${NOVELATE_BASE_URL}/api/v1/shops?latitude=${latitude}&longitude=${longitude}&maxRadius=${maxRadius}&topNumRows=${topNumRows}`,
      {
        // headers: {
        //   'x-novelate-api-key': NOVELATE_API_KEY,
        // },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

const shopsListSlice = createSlice({
  name: 'shopsList',
  initialState: {
    fetchedData: {},
    isLoading: false,
    error: null,
  } as ShopsListState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShops.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchShops.fulfilled, (state, action) => {
        state.isLoading = false;
        state.fetchedData = action.payload;
        state.error = null;
      })
      .addCase(fetchShops.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || null;
      });
  },
});

export default shopsListSlice.reducer;
