import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import apiReducers from "../reducers/apiReducers"
import * as Location from "expo-location"
import { unwrapResult } from "@reduxjs/toolkit"
import yelpAPI from "../../APIs/yelp"

const initialState = {
    coords: {},
    locationAPIStatus: "idle",
    error: null
}

export const fetchUserCoords = createAsyncThunk(
    "api/fetchUserCoords",
    async (_, thunkAPI) => {
        try {
            let { status } =
                await Location.requestForegroundPermissionsAsync()

            if (status !== "granted") {
                // maybe set isLocationError to true
                return
            }

            const locationData =
                await Location.getCurrentPositionAsync({})

            return locationData
        } catch (err) {
            console.log(err)
            console.log("Error when fetching coords in apiSlice.js")
            return thunkAPI.rejectWithValue("Fetching Coords Failed")
        }
    },
    {
        // cancelling before execution
        condition: (_, { getState, extra }) => {
            const { api } = getState()
            if (
                api.locationAPIStatus === "fulfilled" ||
                api.locationAPIStatus === "loading"
            ) {
                // api request in progress, don't send another request
                return false
            }
        }
    }
)

const apiSlice = createSlice({
    name: "api",
    initialState: initialState,
    reducers: apiReducers,
    extraReducers: {
        [fetchUserCoords.fulfilled]: (state, action) => {
            state.coords = action.payload
            state.locationAPIStatus = "fulfilled"
            console.log("Extra reducers => fulfilled")
        },
        [fetchUserCoords.pending]: state => {
            state.locationAPIStatus = "loading"
            console.log("Extra reducers => pending")
        },
        [fetchUserCoords.rejected]: state => {
            state.locationAPIStatus = "failed"
            console.log("Extra reducers => rejected")
        }
    }
})

// named action exports, check apiReducers.js for reducer names
export const { setUserGeolocationCoords, setErrorMessage } =
    apiSlice.actions

// selectors
export const selectCoords = state => state.api.coords

// export reducer by default
export default apiSlice.reducer
