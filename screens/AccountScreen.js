import React from "react"
import { View, StyleSheet, Button } from "react-native"
import { Text } from "react-native-elements"
import { handleUserLogout } from "../redux/slices/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { selectUsername } from "../redux/slices/favoritesSlice"
import { selectAllFavorites } from "../redux/slices/favoritesSlice"
import { selectUserEmail } from "../redux/slices/favoritesSlice"

const AccountScreen = () => {
    const dispatch = useDispatch()
    const name = useSelector(selectUsername)
    const email = useSelector(selectUserEmail)
    const numFavorites = useSelector(selectAllFavorites).length

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text h1 style={styles.text}>
                    {name}
                </Text>
                <Text h4 style={styles.text}>
                    {email}
                </Text>
                <Text h4 style={styles.text}>
                    Favorites: {numFavorites}
                </Text>
            </View>

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
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    },
    subContainer: {
        flexDirection: "column",
        alignItems: "center"
    },
    text: {
        textAlign: "center",
        fontWeight: "300",
        margin: 20
    }
})

export default AccountScreen
