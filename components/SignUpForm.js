import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { Text, Input, Button } from "react-native-elements"
import * as RootNavigation from "../navigation/RootNavigation"
import isValidUserRegistration from "../helperFunctions/isValidUserRegistration"
import { useDispatch, useSelector } from "react-redux"
import {
    registerUser,
    selectAuthState,
    setErrorMessage
} from "../redux/slices/authSlice"

const SignUpForm = () => {
    // state for login form
    const [userName, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")

    const loginState = {
        userName,
        email,
        password1,
        password2,
        errorMsg
    }

    const dispatch = useDispatch()
    const errorMsg = useSelector(selectAuthState).errorMessage

    return (
        <View style={styles.container}>
            <View>
                <Text h3>UserName</Text>
                <Input
                    placeholder="Username"
                    leftIcon={{ type: "font-awesome", name: "user" }}
                    onChangeText={value => setUsername(value)}
                    value={userName}
                />
                <Text h3>Email</Text>
                <Input
                    placeholder="Email"
                    leftIcon={{ type: "font-awesome", name: "user" }}
                    onChangeText={value => setEmail(value)}
                    value={email}
                />
                <Text h3>Password</Text>
                <Input
                    placeholder="Password"
                    leftIcon={{ type: "font-awesome", name: "lock" }}
                    onChangeText={value => setPassword1(value)}
                    secureTextEntry={true}
                    value={password1}
                />
                <Text h3>Re-enter Password</Text>
                <Input
                    placeholder="Password"
                    leftIcon={{ type: "font-awesome", name: "lock" }}
                    onChangeText={value => setPassword2(value)}
                    secureTextEntry={true}
                    value={password2}
                />
                <Button
                    title="Register"
                    onPress={() => {
                        const isValid = isValidUserRegistration(
                            loginState,
                            dispatch
                        )
                        if (isValid) {
                            dispatch(registerUser(loginState))
                        }
                    }}
                />
            </View>
            <Text style={styles.errorMessageStyle}>{errorMsg}</Text>

            <Text h6 style={styles.bottomTextStyle}>
                Already have an account?{" "}
                <Text
                    style={styles.loginLink}
                    onPress={() => {
                        RootNavigation.navigate("Login")
                        dispatch(setErrorMessage(""))
                    }}
                >
                    Login
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
    errorMessageStyle: {
        textAlign: "center",
        color: "red",
        fontWeight: "300",
        fontSize: 18
    },
    bottomTextStyle: {
        textAlign: "center",
        marginBottom: 10
    },
    loginLink: {
        color: "#3c6dcc"
    }
})

export default SignUpForm
