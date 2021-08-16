import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const FavoritesScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Text>Favorites Screen</Text>

            <Button
                title="Go To Single Favorite"
                onPress={() => navigation.navigate("FavoriteStack")}
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

export default FavoritesScreen
