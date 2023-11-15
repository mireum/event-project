import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedList: [

  ],
};

const likedSlice = createSlice({
  name: 'liked',
  initialState,
  reducers: {
    addLikedItem: (state, { payload: item }) => {
      const targetItem = state.likedList.
    },

    removeLikedItem: (state, { payload: id }) => {
      const newLikedList = state.likedList.filter(item => item.id !== id);
      state.likedList = newLikedList;
    }
  }
});