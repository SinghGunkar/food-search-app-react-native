// reducers
const authReducers = {
    loginUser: {
        reducer(state, action) {
            state.isUserLoggedIn = true
        }
    },
    logoutUser: {
        reducer(state, action) {
            state.isUserLoggedIn = false
        }
    },
    setErrorMessage: {
        reducer(state, action) {
            state.errorMessage = action.payload
        }
    }
}

export default authReducers
