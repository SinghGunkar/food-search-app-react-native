import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import databaseAPI from "../../APIs/database"
import favoritesReducers from "../reducers/favoritesReducers"

const initialState = {}

export const editExistingFavorite = createAsyncThunk(
    "favorites/editExistingFavorite",
    async ({ userID, favoriteID, text }) => {
        try {
            await databaseAPI.put(
                "/FoodAPI/v1/user/updateFavoriteForUser",
                {
                    user_id: userID,
                    fav_id: favoriteID,
                    updatedFavorite: text
                }
            )
        } catch (err) {
            console.log(err)
            console.log(
                "Something went wrong when editing an existing favorite in favoritesSlice.js"
            )
        }
    }
)

export const addNewFavorite = createAsyncThunk(
    "favorites/addNewFavorite",
    async ({ userID, text }) => {
        try {
            await databaseAPI.post(
                "/FoodAPI/v1/user/createFavoriteForUser",
                {
                    user_id: userID,
                    text: text
                }
            )
        } catch (err) {
            console.log(err)
            console.log(
                "Something went wrong when adding a new favorite in favoritesSlice.js"
            )
        }
    }
)

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
            console.log(
                `Something went wrong when fetching favorites for user info`
            )
            console.log(err.response)
        }
    }
)

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
    clearFavoritesState,
    addFavorite
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
