// src/store/baseUrlSlice.js
import { createSlice } from "@reduxjs/toolkit";

const baseUrlSlice = createSlice({
  name: "baseUrl",
  initialState: "https://pern-todo-be.vercel.app", // Initial state
  reducers: {
    setBaseUrl: (state, action) => {
      return action.payload; // Update the state with the new base URL
    },
  },
});

export const { setBaseUrl } = baseUrlSlice.actions;
export default baseUrlSlice.reducer;
