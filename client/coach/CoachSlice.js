// coachSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCoaches = createAsyncThunk("coach/fetchCoaches", async () => {
  const response = await axios.get("/api/coaches");
  return response.data;
});

const coachSlice = createSlice({
  name: "coach",
  initialState: {
    coaches: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoaches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCoaches.fulfilled, (state, action) => {
        state.coaches = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCoaches.rejected, (state, action) => {
        state.coaches = [];
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default coachSlice.reducer;
y;
