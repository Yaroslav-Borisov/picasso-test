import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
	postList: [],
    currentPage: 1,
    totalCount: 0,
	canScrolled: true
};

export const postsSlice = createSlice({
	name: 'posts',
	initialState: initialState,
	reducers: {
		setPostList: (state, action) => {
			state.postList = [...state.postList, ...action.payload]

			if (state.postList.length === state.totalCount) {
				state.canScrolled = false
			}
		},
        setNewPage: (state) => {
			state.currentPage = state.currentPage + 1
		},
        setTotalCount: (state, action) => {
			state.totalCount = Number(action.payload)
		},
	}
});

export default postsSlice.reducer;
export const postsActions = postsSlice.actions;