import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedList: [],
};

const likedSlice = createSlice({
  name: 'liked',
  initialState,
  reducers: {
    addLikedItem: (state, { payload: item }) => {
      state.likedList.push(item);
      console.log(initialState);
    },

    removeLikedItem: (state, { payload: id }) => {
      const newLikedList = state.likedList.filter(item => item.id !== id);
      state.likedList = newLikedList;
    }
  }
});

export const { addLikedItem, removeLikedItem } = likedSlice.actions;

export const likedList = state => state.liked.likedList;

export default likedSlice.reducer;