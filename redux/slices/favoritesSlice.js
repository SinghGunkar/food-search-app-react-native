import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import databaseAPI from "../../APIs/database"
import favoritesReducers from "../reducers/favoritesReducers"

const initialState = {}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: favoritesReducers
})

export const onPressedDeleteFavorite = createAsyncThunk(
    "favorites/onPressedDeleteFavorite",
    async ({ userID, favoriteID }) => {
        try {
            await databaseAPI.delete(
                "/FoodAPI/v1/user/deleteFavoriteForUser",
                {
                    data: {
                        user_id: userID,
                        fav_id: favoriteID
                    }
                }
            )
        } catch (err) {
            console.log(
                "Issue when trying to delete favorite for user in favoritesSlice.js\n"
            )
            console.log(err)
        }
    }
)

export const fetchFavoritesByUserId = createAsyncThunk(
    "favorties/fetchFavoritesByUserId",
    async ({ email }) => {
        try {
            const response = await databaseAPI.get(
                "/FoodAPI/v1/user/getAllFavorites",
                {
                    email: email
                }
            )

            if (response.state !== 200) {
                console.log("Failed to fetch user favorites")
            }

            console.log(response.data)

            return response.data
        } catch (err) {
            console.log(
                "Issue when trying to fetch favorites for user in favoritesSlice.js\n"
            )
        }
    }
)

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
