import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: '',
  username: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectId = (state) => state.user.id;
export const selectUsername = (state) => state.user.username;
export const selectEmail = (state) => state.user.email;

export default userSlice.reducer;