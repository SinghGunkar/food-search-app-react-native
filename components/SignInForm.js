import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { Text, Input, Button } from "react-native-elements"
import * as RootNavigation from "../navigation/RootNavigation"
import { handleUserLogin } from "../redux/slices/authSlice"
import { selectAuthState } from "../redux/slices/authSlice"

const SignInForm = () => {
    // state for login form
    const [email, setEmail] = useState("testemail@emil.com")
    const [password, setPassword] = useState("Testtest")

    const dispatch = useDispatch()
    const errorMsg = useSelector(selectAuthState).errorMessage

    return (
        <View style={styles.container}>
            <View>
                <Text h3>Email</Text>
                <Input
                    placeholder="Email"
                    leftIcon={{ type: "font-awesome", name: "user" }}
                    onChangeText={value => setEmail(value)}
                    errorMessage={errorMsg}
                />
                <Text h3>Password</Text>
                <Input
                    placeholder="Password"
                    leftIcon={{ type: "font-awesome", name: "lock" }}
                    onChangeText={value => setPassword(value)}
                    secureTextEntry={true}
                    errorMessage={errorMsg}
                />

                <Button
                    title="Login"
                    onPress={() =>
                        dispatch(handleUserLogin({ email, password }))
                    }
                />
            </View>

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

    registerLink: {
        color: "#3c6dcc"
    }
})

export default SignInForm
