import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { useDispatch } from "react-redux"
import { loginUser } from "../redux/slices/authSlice"

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Button
                title="Login"
                onPress={() => dispatch(loginUser())}
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

export default LoginScreen
