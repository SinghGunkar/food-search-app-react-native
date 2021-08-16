import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authReducers from "../reducers/authReducers"
import databaseAPI from "../../APIs/database"
import AsyncStorage from "@react-native-async-storage/async-storage"

const initialState = {
    isUserLoggedIn: false,
    token: null,
    errorMessage: ""
}

// thunks
export const registerUser = createAsyncThunk(
    "auth/resgisterUser",
    async ({ userName, email, password1 }, thunkAPI) => {
        try {
            const response = await databaseAPI.post(
                "/FoodAPI/v1/auth/registerUser",
                {
                    name: userName,
                    email,
                    role: "user",
                    password: password1
                }
            )

            // store token if request was successful and login user
            if (response.status === 200) {
                await AsyncStorage.setItem(
                    "food-search-token",
                    response.data.token
                )
                thunkAPI.dispatch(loginUser())
            }
        } catch (err) {
            console.log(
                `Issue when trying to register user in authSlice.js\n${err.response.data.error}`
            )
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: authReducers
})

// named action exports, check authReducer.js for reducer names
export const { loginUser, logoutUser } = authSlice.actions

// selector exports
export const selectAuthState = state => state.auth

// export favorites reducer by default
export default authSlice.reducer
