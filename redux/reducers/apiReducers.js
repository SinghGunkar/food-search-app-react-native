// reducers
const apiReducers = {
    setUserGeolocationCoords: {
        reducer(state, action) {
            state.coords = action.payload
        }
    },
    setErrorMessage: {
        reducer(state, action) {
            state.errorMessage = action.payload
        }
    }
}

export default apiReducers
