import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	festival: [],
};

const detailSlice = createSlice({
	name: 'festival',
	initialState,
	reducers: {

	}
});

export const selectFestivalList = state => state.festival;