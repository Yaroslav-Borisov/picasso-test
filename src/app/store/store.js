import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsAPI } from "../services/PostsService";
import { postAPI } from "../../pages/Post/api/PostApi";

const rootReducer = combineReducers({
	[postsAPI.reducerPath]: postsAPI.reducer,
	[postAPI.reducerPath]: postAPI.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([postsAPI.middleware, postAPI.middleware])
	})
}