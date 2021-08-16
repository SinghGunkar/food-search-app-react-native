import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isUserLoggedIn: false,
    token: null
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
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
})

// named action exports
export const { loginUser, logoutUser } = authSlice.actions

// selector exports
export const selectAuthState = state => state.auth

// export favorites reducer by default
export default authSlice.reducer
