import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchPosts = createAsyncThunk(
    'posts/fetchAll',
    async (_,thunkAPI) => {
        try {
        } catch (e) {
            return thunkAPI.rejectWithValue('Failed to load, sorry...')
        }
    }
)