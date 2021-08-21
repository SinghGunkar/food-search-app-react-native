// reducers
const apiReducers = {
    setIsError: {
        reducer(state, action) {
            state.isError = action.payload
        }
    },
    setIsLoading: {
        reducer(state) {
            state.isLoading = action.payload
        }
    },
    setLocationAPIStatus: {
        reducer(state) {
            state.locationAPIStatus = action.payload
        }
    }
}

export default apiReducers
