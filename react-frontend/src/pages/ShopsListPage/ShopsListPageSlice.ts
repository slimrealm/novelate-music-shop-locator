import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import sampleData from '../../zsample-api-response.json'  //TODO: Temp - delete when done

interface ShopsListState {
  fetchedData: any;
  isLoading: boolean;
  error: string | null;
}

const NOVELATE_BASE_URL = process.env.REACT_APP_NOVELATE_BASE_URL;
const NOVELATE_API_KEY = process.env.REACT_APP_NOVELATE_API_KEY;

export const fetchShops = createAsyncThunk('shopsList/fetchShops', async () => {
  // need to switch hard-coded coords to user's device location
  const latitude = "29";
  const longitude = "-95";
  const maxRadius = "100";
  const topNumRows = "10";
  try {
    ///////////////////////////////////////////////////////////////////////
    // const response = await axios.get(
    //   `${NOVELATE_BASE_URL}/api/v1/shops?latitude=${latitude}&longitude=${longitude}&maxRadius=${maxRadius}&topNumRows=${topNumRows}`,
    //   {
    //     headers: {
    //       'x-novelate-api-key': NOVELATE_API_KEY,
    //     },
    //   },
    // );
    //
    //     return response.data;
    ////////////////////////////////////////////////////////////////////////
    return sampleData;  //TODO: Replace this line with above section
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
