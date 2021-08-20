import React from "react"
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from "react-native"
import { AntDesign } from "@expo/vector-icons"

const SearchBar = ({
    searchTerm,
    onSearchTermChange,
    onTermSubmit
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.touchable}
                onPress={() => onTermSubmit()}
            >
                <AntDesign
                    name="search1"
                    size={24}
                    color="black"
                    style={styles.searchIcon}
                />
            </TouchableOpacity>

            <TextInput
                style={styles.textInput}
                placeholder="Enter text"
                value={searchTerm}
                onChangeText={newTerm => onSearchTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()}
                autoCapitalize={"none"}
                clearButtonMode="always"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderRadius: 10,
        flexDirection: "row",
        borderWidth: 1,
        padding: 5,
        margin: 10,
        backgroundColor: "white"
    },
    searchIcon: {
        fontSize: 35
    },
    textInput: {
        flex: 1,
        fontSize: 20,
        paddingHorizontal: 4
    },
    touchable: {
        flexDirection: "column",
        justifyContent: "center"
    }
})

export default SearchBar
