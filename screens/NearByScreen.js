import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const NearByScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Text>Near You</Text>
            <Button
                title="Go To Single Favorite"
                onPress={() =>
                    navigation.navigate("FavoriteStack", {
                        favorite: "Set favorite in NearByScreen.js"
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

export default NearByScreen
