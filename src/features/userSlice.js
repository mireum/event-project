import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: '',
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectId = (state) => state.user.id;
export const selectUsername = (state) => state.user.username;

export default userSlice.reducer;