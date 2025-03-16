import {createSlice} from "@reduxjs/toolkit";


const fetchSlice = createSlice({
  name: 'fetchItemsStatus',
  initialState: { fetchDone: false, currentlyFetch: false },
  reducers: {
    FetchDoneStatus: (state) => {
      state.fetchDone = true;  
    },
    CurrentFetchStartStatus: (state) => {
      state.currentlyFetch = true;  
    },
    CurrentFetchEndStatus: (state) => {
      state.currentlyFetch = false;  
    }
  }
});

export const fetchActions = fetchSlice.actions;
export default fetchSlice;