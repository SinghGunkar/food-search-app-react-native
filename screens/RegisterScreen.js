import React, { useEffect } from "react"
import { View } from "react-native"
import SignUpForm from "../components/SignUpForm"
import styles from "../styles/globalStyles"
import { attemptAutoLocalSignIn } from "../redux/slices/authSlice"
import { useDispatch } from "react-redux"

const RegisterScreen = props => {
    // attempt to automatically sign in
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(attemptAutoLocalSignIn())
    }, [])

    return (
        <View style={styles.container}>
            <SignUpForm />
        </View>
    )
}

export default RegisterScreen
