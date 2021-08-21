import { configureStore } from "@reduxjs/toolkit"
import favoritesReducer from "./slices/favoritesSlice"
import authReducer from "./slices/authSlice"
import apiReducers from "./slices/apiSlice"

export default configureStore({
    reducer: {
        favorites: favoritesReducer,
        auth: authReducer,
        api: apiReducers
    }
})
