import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	festival: [],
	selectedFestival: null
};

const detailSlice = createSlice({
	name: 'festival',
	initialState,
	reducers: {

	}
});

export const selectSeletedFestival = state => state.festival.selectedFestival;