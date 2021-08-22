import React from "react"
import { View } from "react-native"
import SignInForm from "../components/SignInForm"
import styles from "../styles/globalStyles"
import { useDispatch } from "react-redux"
import { setErrorMessage } from "../redux/slices/authSlice"

const LoginScreen = ({ navigation }) => {
    // clear error message when use leaves screen (Bug fix)
    const dispatch = useDispatch()
    const clearErrorMessage = () => dispatch(setErrorMessage(""))
    navigation.addListener("transitionStart", () => {
        clearErrorMessage()
    })

    return (
        <View style={styles.container}>
            <SignInForm />
        </View>
    )
}

export default LoginScreen
