import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventListItem: [],
  selectedListItem: [],
  reservItem: [],
  images: [],
};

const nowTime = new Date().getTime();

const eventListSlice = createSlice({
  name: 'eventList',
  initialState,
  reducers: {
    getEventList: (state, action) => {
      state.eventListItem = action.payload;
      
      // for (let i = 0; i < 60; i++) {
      //   const endTime = new Date(state.eventListItem[i].fstvlEndDate).getTime();
      //   const startTime = new Date(state.eventListItem[i].fstvlStartDate).getTime();
      //   if (endTime > nowTime && nowTime > startTime) {
      //     state.eventListItem[i].holding = true;
      //   }
      // }
    },
    getSelectedList: (state, action) => {
      state.selectedListItem = action.payload;
    },
    getReservList: (state, action) => {
      state.reservItem = action.payload;
    }
  }
});

export const { getEventList, getSelectedList, getReservList } = eventListSlice.actions;

// 선택자 함수
export const selectEventList = state => state.eventList.eventListItem;
export const selectSelectedListItem = state => state.eventList.selectedListItem
export const selectReservList = state => state.eventList.reservItem;

// 리듀서 함수
export default eventListSlice.reducer;