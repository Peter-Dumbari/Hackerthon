import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookslice";

const store = configureStore({
  reducer: {
    bookshelf: bookReducer,
  },
});

export default store;
