import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import apiReducers from "../reducers/apiReducers"
import * as Location from "expo-location"
import { unwrapResult } from "@reduxjs/toolkit"
import yelpAPI from "../../APIs/yelp"

const initialState = {
    coords: {},
    locationAPIStatus: "idle",
    searchAPIStatus: "idle",
    isError: false,
    isLoading: false
}

export const fetchSearchResults = createAsyncThunk(
    "api/fetchSearchResults",
    async ({ searchTerm, latitude, longitude }, thunkAPI) => {
        try {
            const response = await yelpAPI.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    latitude,
                    longitude
                }
            })
            return response.data.businesses
        } catch (err) {
            console.log("Error in apiSlice => fetchSearchResults")
        }
    }
)

export const fetchUserCoords = createAsyncThunk(
    "api/fetchUserCoords",
    async (_, thunkAPI) => {
        try {
            let { status } =
                await Location.requestForegroundPermissionsAsync()

            if (status !== "granted") {
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
        // are executed on requests
        [fetchUserCoords.fulfilled]: (state, action) => {
            state.coords = action.payload
            state.locationAPIStatus = "fulfilled"
            state.isError = false
            state.isLoading = false
        },
        [fetchUserCoords.pending]: state => {
            state.locationAPIStatus = "loading"
            state.isError = false
            state.isLoading = true
        },
        [fetchUserCoords.rejected]: state => {
            state.locationAPIStatus = "failed"
            state.isError = true
            state.isLoading = true
        }
    }
})

// named action exports, check apiReducers.js for reducer names
export const { setIsError, setIsLoading, locationAPIStatus } =
    apiSlice.actions

// selectors
export const selectCoords = state => state.api.coords
export const selectAPIState = state => state.api

// export reducer by default
export default apiSlice.reducer
