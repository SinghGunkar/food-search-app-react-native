import React from "react"
import { View, StyleSheet } from "react-native"
import SearchResultsList from "../components/SearchResultsList"

const SearchResultsScreen = ({ route }) => {
    const { favorite } = route.params

    return (
        <View style={styles.container}>
            <SearchResultsList searchTerm={favorite} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    }
})

export default SearchResultsScreen
