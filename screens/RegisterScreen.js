import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const RegisterScreen = props => {
    const { navigation } = props

    return (
        <View style={styles.container}>
            <Text>Register Screen</Text>
            <Text>Already have an account?</Text>
            <Button
                title="Sign In"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e8f4f8"
    }
})

export default RegisterScreen
