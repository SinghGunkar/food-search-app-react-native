import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authReducers from "../reducers/authReducers"
import databaseAPI from "../../APIs/database"
import AsyncStorage from "@react-native-async-storage/async-storage"

const initialState = {
    isUserLoggedIn: false,
    token: null,
    errorMessage: "",
    token: ""
}

// thunks
export const registerUser = createAsyncThunk(
    "auth/registerUser",
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
                thunkAPI.dispatch(setErrorMessage(""))
            }
        } catch (err) {
            const errMsg = `Issue when trying to register user in authSlice.js\n${err.response.data.error}`
            thunkAPI.dispatch(setErrorMessage(errMsg))
        }
    }
)

export const handleUserLogout = createAsyncThunk(
    "auth/logoutUser",
    async (obj, thunkAPI) => {
        try {
            // remove token
            await AsyncStorage.removeItem("food-search-token")
            thunkAPI.dispatch(logoutUser)
            thunkAPI.dispatch(setErrorMessage(""))
        } catch (err) {
            const errMsg = `Issue when trying to logout user in authSlice.js\n${err.response.data.error}`
            thunkAPI.dispatch(setErrorMessage(errMsg))
        }
    }
)

export const handleUserLogin = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await databaseAPI.post(
                "/FoodAPI/v1/auth/login",
                {
                    email,
                    password
                }
            )

            // store token if request was successful and login user
            if (response.status === 200) {
                await AsyncStorage.setItem(
                    "food-search-token",
                    response.data.token
                )
                thunkAPI.dispatch(loginUser())
                thunkAPI.dispatch(setErrorMessage(""))
            }
        } catch (err) {
            const errMsg = `${err.response.data.error}`
            thunkAPI.dispatch(setErrorMessage(errMsg))
        }
    }
)

// slice creation
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: authReducers
})

// named action exports, check authReducer.js for reducer names
export const { loginUser, logoutUser, setErrorMessage } =
    authSlice.actions

// selector exports
export const selectAuthState = state => state.auth

// export favorites reducer by default
export default authSlice.reducer
