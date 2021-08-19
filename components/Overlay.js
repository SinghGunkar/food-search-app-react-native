import React, { useState } from "react"
import { Button, Overlay, Text, Input } from "react-native-elements"
import { View, StyleSheet } from "react-native"

const AddFavoriteOverlay = ({
    isOverlayShowed,
    setIsOverlayShowed
}) => {
    const [text, setText] = useState("")

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
                    onPress={() => console.log(text)}
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
