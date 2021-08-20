import React, { useEffect } from "react"
import { View, StyleSheet } from "react-native"
import { Text } from "react-native-elements"
import SearchResultsList from "../components/SearchResultsList"
import useResults from "../customHooks/useResults"

const SearchResultsScreen = ({ route }) => {
    const { favorite } = route.params
    const searchTerm = favorite

    const latitude = 53.48369
    const longitude = -113.39648
    const coordinates = { latitude, longitude }

    // custom hook
    const [fetchResults, searchResults, isSearchError] =
        useResults(searchTerm)

    // fetch results vis useEffect
    useEffect(() => {
        fetchResults(searchTerm, coordinates)
    }, [])

    return (
        <View style={styles.container}>
            {isSearchError ? (
                <Text h3 style={styles.errorMessage}>
                    Error when searching Please try again later
                </Text>
            ) : (
                <SearchResultsList searchResults={searchResults} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    errorMessage: {
        fontWeight: "300",
        padding: 50,
        textAlign: "center",
        top: "30%"
    }
})

export default SearchResultsScreen
