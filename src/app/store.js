import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/searchSlice";
import bookMarkReducer from "../components/list/bookmarkSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    bookmark: bookMarkReducer,
  }
});