import React from "react"
import { View, StyleSheet, Text } from "react-native"

const FavoriteScreen = ({ route }) => {
    const { favorite } = route.params

    return (
        <View style={styles.container}>
            <Text>Search results for the following: {favorite}</Text>
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

export default FavoriteScreen
