import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: 1, favorite: "indian food" },
    { id: 2, favorite: "bubble tea" },
    { id: 3, favorite: "pizza" }
]

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: {
        addFavorites: {
            reducer(state, action) {
                state.favorites.push(action.payload)
            }
        }
    }
})

// named action exports
export const { addPost } = favoritesSlice.actions

// export favorites reducer by default
export default favoritesSlice.reducer
