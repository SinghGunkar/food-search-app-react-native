import React from "react"
import { View, StyleSheet, Button } from "react-native"
import { useDispatch } from "react-redux"
import { handleUserLogout } from "../redux/slices/authSlice"

const AccountScreen = () => {
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Button
                title="Logout"
                onPress={() => {
                    dispatch(handleUserLogout())
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default AccountScreen
