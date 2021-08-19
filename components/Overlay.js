import React, { useState } from "react"
import { Button, Overlay, Text, Input } from "react-native-elements"
import { View, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import {
    addNewFavorite,
    selectUserId,
    fetchFavorites,
    setFavorites
} from "../redux/slices/favoritesSlice"

const AddFavoriteOverlay = ({
    isOverlayShowed,
    setIsOverlayShowed
}) => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const userID = useSelector(selectUserId)

    return (
        <View>
            <Overlay
                isVisible={isOverlayShowed}
                onBackdropPress={() => setIsOverlayShowed(false)}
                animationType={"slide"}
            >
                <Text h2>Add new favorite</Text>
                <View>
                    <Input
                        placeholder="Enter text"
                        onChangeText={value => setText(value)}
                    />
                </View>

                <Button
                    title="Submit"
                    onPress={() => {
                        // add new favorite to database
                        dispatch(addNewFavorite({ userID, text }))

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

                        // close overlay
                        setIsOverlayShowed(false)
                    }}
                    style={styles.button}
                />
            </Overlay>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        color: "blue"
    }
})

export default AddFavoriteOverlay
