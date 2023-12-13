import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import searchReducer from "../features/searchSlice";
import eventListReducer from "../api/eventListSlice";
import likedReducer from "../features/likedSlice";
import findReducer from "../features/findSlice";
import userRedecer from "../features/userSlice";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    eventList: eventListReducer,
    liked: likedReducer,
    find: findReducer,
    user: userRedecer,
  }
});
// const reducers = combineReducers({
//   user: userSlice.reducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
//   reducer: {
//         search: searchReducer,
//         eventList: eventListReducer,
//         liked: likedReducer,
//         find: findReducer,
//         persistedReducer,
//   },
//   middleware: getDefaultMiddleware=>getDefaultMiddleware({ serializableCheck: false })
// });

export default store;
