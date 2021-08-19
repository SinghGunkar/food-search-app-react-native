// reducers
const favoritesReducers = {
    setFavorites: {
        reducer(state, action) {
            state["favoritesArray"] = action.payload
        }
    },
    setUserId: {
        reducer(state, action) {
            state["userID"] = action.payload
        }
    },
    setEmail: {
        reducer(state, action) {
            state["email"] = action.payload
        }
    },
    setName: {
        reducer(state, action) {
            state["username"] = action.payload
        }
    },
    clearFavoritesState: {
        reducer(state) {
            state = {}
        }
    },
    addFavorite: {
        reducer(state, action) {
            state["favoritesArray"].push(action.payload)
        }
    }
}

export default favoritesReducers
