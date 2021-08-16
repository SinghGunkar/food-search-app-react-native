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
    }
}

export default authReducers
