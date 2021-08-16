import React from "react"
import { View, StyleSheet } from "react-native"
import SignInForm from "../components/SignInForm"
import styles from "../styles/globalStyles"

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SignInForm />
        </View>
    )
}

export default LoginScreen
