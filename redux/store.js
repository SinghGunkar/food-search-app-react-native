import { configureStore } from "@reduxjs/toolkit"
import favoritesReducer from "./slices/favoritesSlice"
import authReducer from "./slices/authSlice"

export default configureStore({
    reducer: {
        favorites: favoritesReducer,
        auth: authReducer
    }
})
