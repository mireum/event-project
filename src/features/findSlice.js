import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  findWord: [],
  findList: [],
};

const findSlice = createSlice({
  name: 'find',
  initialState,
  reducers: {
    getEventListForFind: (state, action) => {
      state.findList = action.payload;
    },
    getFindWord: (state, {payload: str}) => {
      state.findWord = str; 
    },
  }
});

export const { getFindWord, getEventListForFind } = findSlice.actions;

export const selectFindList = state => state.find.findList;
export const selectFindWord = state => state.find.findWord;

export default findSlice.reducer;