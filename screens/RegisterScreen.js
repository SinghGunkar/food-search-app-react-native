import React from "react"
import { View } from "react-native"

import SignUpForm from "../components/SignUpForm"
import styles from "../styles/globalStyles"

const RegisterScreen = props => {
    return (
        <View style={styles.container}>
            <SignUpForm />
        </View>
    )
}

export default RegisterScreen
