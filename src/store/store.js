import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsAPI } from "../services/PostsService";

const rootReducer = combineReducers({
	[postsAPI.reducerPath]: postsAPI.reducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsAPI.middleware)
	})
}