import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subject: null,
  month: null,
  location: null,
  category: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getSubject: (state, action) => {
      state.subject = action.payload;
    },
    getMonth: (state, action) => {
      state.month = action.payload;
    },
    getLocation: (state, action) => {
      state.location = action.payload;
    },
    getCategory: (state, action) => {
      state.category = action.payload;
    },
  }
});


// 액션 생성 함수
export const { getSubject, getMonth, getLocation, getCategory } = searchSlice.actions;

// 선택자 함수
export const search