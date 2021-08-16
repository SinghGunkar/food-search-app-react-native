import React from "react"
import { Provider } from "react-redux"

// redux imports
import store from "./redux/store"

// navigtion imports
import { Router } from "./navigation/router"

export default function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}
