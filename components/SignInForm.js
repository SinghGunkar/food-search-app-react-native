import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import { Text, Input, Button } from "react-native-elements"
import * as RootNavigation from "../navigation/RootNavigation"
import { loginUser } from "../redux/slices/authSlice"

const SignInForm = () => {
    // state for login form
    const [email, setEmail] = useState("testemail@emil.com")
    const [password, setPassword] = useState("Testtest")
    const [errorMsg, setErrorMsg] = useState("")

    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <View>
                <Text h3>Email</Text>
                <Input
                    placeholder="Email"
                    leftIcon={{ type: "font-awesome", name: "user" }}
                    onChangeText={value => setEmail(value)}
                />
                <Text h3>Password</Text>
                <Input
                    placeholder="Password"
                    leftIcon={{ type: "font-awesome", name: "lock" }}
                    onChangeText={value => setPassword(value)}
                    secureTextEntry={true}
                />

                <Button
                    title="Login"
                    onPress={() => console.log("handle login")}
                />
                <Button
                    title="Test Login"
                    onPress={() =>
                        dispatch(loginUser({ email, password }))
                    }
                />
            </View>
            <Text style={styles.errorMessageStyle}>{errorMsg}</Text>
            <Text h6 style={styles.bottomTextStyle}>
                Don't have an account?{" "}
                <Text
                    style={styles.registerLink}
                    onPress={() => {
                        RootNavigation.navigate("Register")
                    }}
                >
                    Register
                </Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        justifyContent: "space-between"
    },

    bottomTextStyle: {
        textAlign: "center",
        marginBottom: 10
    },
    errorMessageStyle: {
        textAlign: "center",
        color: "red",
        fontWeight: "300",
        fontSize: 18
    },
    registerLink: {
        color: "#3c6dcc"
    }
})

export default SignInForm
