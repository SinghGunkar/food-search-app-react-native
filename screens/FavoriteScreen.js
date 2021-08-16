import React from "react"
import { View, StyleSheet, Text } from "react-native"

const FavoriteScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Display Single Favorite Here</Text>
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
