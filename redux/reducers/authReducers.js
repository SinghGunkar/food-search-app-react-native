// reducers
const authReducers = {
    loginUser: {
        reducer(state) {
            state.isUserLoggedIn = true
        }
    },
    logoutUser: {
        reducer(state) {
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
