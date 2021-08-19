import React from "react"
import { View, StyleSheet } from "react-native"
import EditFavoriteForm from "../components/EditFavoriteForm"

const EditFavoriteScreen = ({ route }) => {
    const { favoriteID, userID, text } = route.params

    return (
        <View style={styles.container}>
            <EditFavoriteForm
                favoriteID={favoriteID}
                userID={userID}
                text={text}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 10
    }
})

export default EditFavoriteScreen
