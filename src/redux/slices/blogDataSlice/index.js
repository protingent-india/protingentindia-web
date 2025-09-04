import { createSlice } from '@reduxjs/toolkit';

// --------------------------------------------------

const initialState = {
    blogData: []
};

// --------------------------------------------------

const slice = createSlice({
    name: 'BlogData',
    initialState,
    reducers: {
        addBlogData: (state, action) => {
            state.blogData = action.payload;
        },
    },
});

export const { addBlogData } = slice.actions;

export default slice.reducer;