import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { Text, Input, Button } from "react-native-elements"
import * as RootNavigation from "../navigation/RootNavigation"

const SignUpForm = () => {
    // state for login form
    const [userName, setUsername] = useState("Testtest")
    const [email, setEmail] = useState("testemail@emil.com")
    const [password1, setPassword1] = useState("Testtest")
    const [password2, setPassword2] = useState("Testtest")

    return (
        <View style={styles.container}>
            <View>
                <Text h3>UserName</Text>
                <Input
                    placeholder="Username"
                    leftIcon={{ type: "font-awesome", name: "user" }}
                    onChangeText={value => setUsername(value)}
                />
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
                    onChangeText={value => setPassword1(value)}
                    secureTextEntry={true}
                />
                <Text h3>Re-enter Password</Text>
                <Input
                    placeholder="Password"
                    leftIcon={{ type: "font-awesome", name: "lock" }}
                    onChangeText={value => setPassword2(value)}
                    secureTextEntry={true}
                />
                <Button
                    title="Register"
                    onPress={() => console.log("handle register")}
                />
            </View>

            <Text h6 style={styles.bottomTextStyle}>
                Already have an account?{" "}
                <Text
                    style={{ color: "#3c6dcc" }}
                    onPress={() => {
                        RootNavigation.navigate("Login")
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

    bottomTextStyle: {
        textAlign: "center"
    }
})

export default SignUpForm
