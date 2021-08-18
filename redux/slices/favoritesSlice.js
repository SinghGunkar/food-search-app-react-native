import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import databaseAPI from "../../APIs/database"
import favoritesReducers from "../reducers/favoritesReducers"

const initialState = {}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: favoritesReducers
})

// named action exports
export const {
    setFavorites,
    setUserId,
    setEmail,
    setName,
    clearFavoritesState
} = favoritesSlice.actions

/* 
favorites state looks like 
    Object {
        "email": "example@email.com",
        "favoritesArray": Array [],
        "userID": "342587jdhfkjhkj",
        "username": "someUserName",
    }
*/

// selectors
export const selectUserEmail = state => state.favorites.email
export const selectUserId = state => state.favorites.userID
export const selectUsername = state => state.favorites.username
export const selectAllFavorites = state =>
    state.favorites.favoritesArray

// export favorites reducer by default
export default favoritesSlice.reducer
