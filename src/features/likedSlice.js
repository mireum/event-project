import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedList: [],
};

const likedSlice = createSlice({
  name: 'liked',
  initialState,
  reducers: {
    addLikedItem: (state, { payload: item }) => {
      const targetItem = state.likedList.find((e) => e.id === item.id);
      if (!targetItem) {
        state.likedList.push(item);
      } else {
        return;
      }
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