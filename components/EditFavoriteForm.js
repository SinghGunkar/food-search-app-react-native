import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { Text, Input, Button } from "react-native-elements"
import { useDispatch } from "react-redux"
import {
    editExistingFavorite,
    fetchFavorites,
    setFavorites
} from "../redux/slices/favoritesSlice"
import * as RootNavigation from "../navigation/RootNavigation"

const EditFavoriteForm = ({ favoriteID, userID, text }) => {
    const [currentText, setCurrentText] = useState(text)
    const dispatch = useDispatch()

    return (
        <View>
            <Text h2>Edit Existing Favorite</Text>
            <Input
                value={currentText}
                containerStyle={styles.input}
                onChangeText={value => setCurrentText(value)}
                autoFocus={true}
                spellCheck={false}
            />
            <Button
                title={"Submit"}
                onPress={() => {
                    if (text != currentText) {
                        dispatch(
                            editExistingFavorite({
                                favoriteID,
                                userID,
                                text: currentText
                            })
                        )

                        /*
                        fetch updated list of favorites from database
                        dispatch new favorites to redux store 
                        */
                        dispatch(fetchFavorites())
                            .unwrap()
                            .then(currentFavoriteData => {
                                dispatch(
                                    setFavorites(currentFavoriteData)
                                )
                            })
                            .catch(error => {
                                console.log(error)
                            })

                        RootNavigation.navigate("FavoritesStack")
                    }
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginLeft: 0,
        paddingLeft: 0,
        marginTop: 15
    }
})

export default EditFavoriteForm
