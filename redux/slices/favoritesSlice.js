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

export const fetchFavorites = createAsyncThunk(
    "favorties/fetchFavoritesByUserId",
    async (_, thunkAPI) => {
        try {
            const response = await databaseAPI.get(
                "/FoodAPI/v1/auth/me",
                { withCredentials: true }
            )

            // destructure out the needed data
            const { favorites } = response.data.data

            return favorites
        } catch (err) {
            console.log(err.response)
            const errMsg = `Something went wrong when fetching favorites for user info`
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
