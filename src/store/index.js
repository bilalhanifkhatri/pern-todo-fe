// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import baseUrlReducer from "./baseUrlSlice";

const store = configureStore({
  reducer: {
    baseUrl: baseUrlReducer, // Add baseUrlSlice to the store
  },
});

export default store;
