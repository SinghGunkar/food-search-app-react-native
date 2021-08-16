import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { useSelector } from "react-redux"
import AppStack from "./AppStack"
import AuthStack from "./AuthStack"
import { navigationRef } from "./RootNavigation"

// redux imports
import { selectAuthState } from "../redux/slices/authSlice"

export const Router = () => {
    let { isUserLoggedIn } = useSelector(selectAuthState)

    return (
        <NavigationContainer ref={navigationRef}>
            {isUserLoggedIn ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}
