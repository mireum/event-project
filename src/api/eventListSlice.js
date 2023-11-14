import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventListItem: [],
  images: []
};

const nowTime = new Date().getTime();

const eventListSlice = createSlice({
  name: 'eventList',
  initialState,
  reducers: {
    getEventList: (state, action) => {
      state.eventListItem.push(...action.payload);
      
      for (let i = 0; i < 60; i++) {
        const endTime = new Date(state.eventListItem[i].fstvlEndDate).getTime();
        const startTime = new Date(state.eventListItem[i].fstvlStartDate).getTime();
        if (endTime > nowTime && nowTime > startTime) {
          state.eventListItem[i].holding = true;
        }
        
      }

      for (let i = 0; i < 50; i++) {
        state.eventListItem[i].type = '축제';
        state.eventListItem[i].id= i + 1;
        state.eventListItem[i].image = `${state.images[i].image}`;
      }
      for (let i = 50; i < 60; i++) {
        state.eventListItem[i].type = '전시회';
        state.eventListItem[i].id= i + 1;
      }
      // eventListItem 배열에 id값, category 속성/값 추가
      for (let i = 0; i < 10; i++) {
        state.eventListItem[i].category = '체험';
      }
      for (let i = 10; i < 20; i++) {
        state.eventListItem[i].category = '예술';
      }
      for (let i = 20; i < 30; i++) {
        state.eventListItem[i].category = '문화관광';
      }
      for (let i = 30; i < 40; i++) {
        state.eventListItem[i].category = '인생샷';
      }
      for (let i = 40; i < 60; i++) {
        state.eventListItem[i].category = '연인과함께';
      }
      
      // eventListItem 배열에 image 속성/값 추가
      // for (let i = 0; i < 50; i++) {
      //   state.eventListItem[i].image = `${state.images[i].image}`;
      // }
    },
    getImages: (state, action) => {
      state.images.unshift(...action.payload);
    },
    getMoreImages: (state, action) => {
      state.images.push(...action.payload);
    }
  }
});

console.log(initialState.eventListItem);

export const { getEventList, getImages, getMoreImages } = eventListSlice.actions;

// 선택자 함수
export const selectEventList = state => state.eventList.eventListItem;

// 리듀서 함수
export default eventListSlice.reducer;