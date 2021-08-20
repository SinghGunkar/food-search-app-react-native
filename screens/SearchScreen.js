import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const SearchScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Search for places here</Text>
            <Button
                title="Go To Single Favorite"
                onPress={() =>
                    navigation.navigate("FavoriteStack", {
                        favorite: "Set favorite in SearchScren.js"
                    })
                }
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

export default SearchScreen
