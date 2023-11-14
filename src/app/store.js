import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/searchSlice";
import bookMarkReducer from "../components/list/bookmarkSlice";
import eventListReducer from "../api/eventListSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    eventList: eventListReducer,
    bookmark: bookMarkReducer,
  }
});