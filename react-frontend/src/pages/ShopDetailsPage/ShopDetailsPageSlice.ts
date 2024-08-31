import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import sampleData from '../../zsample-api-response.json'  //TODO: Temp - delete when done

interface ShopDetailsState {
  fetchedDetailsData: any;
  isLoading: boolean;
  error: string | null;
}

const NOVELATE_BASE_URL = process.env.REACT_APP_NOVELATE_BASE_URL;
const NOVELATE_API_KEY = process.env.REACT_APP_NOVELATE_API_KEY;

export const fetchDetails = createAsyncThunk('shopDetails/fetchDetails', async (novelateId: string) => {
  try {
    ////////////////////////////////////////////////////////////////
    // const response = await axios.get(`${NOVELATE_BASE_URL}/api/v1/emr-api/non-patient/shop?shopId=${novelateId}`, {
    //   headers: {
    //     'x-novelate-api-key': NOVELATE_API_KEY,
    //   },
    // });
    // return response.data;
    ///////////////////////////////////////////////////////////////////

    return sampleData;  //TODO: Replace this line with above section
  } catch (error) {
    console.error(error);
  }
});

const shopDetailsSlice = createSlice({
  name: 'shopDetails',
  initialState: {
    fetchedDetailsData: {},
    isLoading: false,
    error: null,
  } as ShopDetailsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.fetchedDetailsData = action.payload;
        state.error = null;
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || null;
      });
  },
});

export default shopDetailsSlice.reducer;
