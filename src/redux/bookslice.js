import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  status: "idle",
  error: null,
  isLoaded: false,
};

const bookSlice = createSlice({
  name: "bookshelf",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      state.books.splice(index, 1);
    },
    updateBook: (state, action) => {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index !== -1) {
        state.books[index] = {
          ...state.books[index],
          ...action.payload,
        };
      }
    },
  },
});

export const { addBook, removeBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
