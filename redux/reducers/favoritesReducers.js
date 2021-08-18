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
        reducer(state, action) {
            state = {}
        }
    },
    addFavorite: {
        reducer(state, action) {
            state["favoritesArray"].push(action.payload)
            console.log(state)
        }
    }
}

export default favoritesReducers
