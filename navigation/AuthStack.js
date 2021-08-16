import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={styles.appHeaderStyles}>
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
            />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )
}

const styles = {
    appHeaderStyles: {
        headerStyle: {
            backgroundColor: "#318CE7"
        },
        headerTintColor: "white",
        headerTitleStyle: {
            fontWeight: "bold"
        }
    }
}

export default AppStack
