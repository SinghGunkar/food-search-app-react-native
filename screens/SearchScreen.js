import React, { useState } from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import SearchBar from "../components/Searchbar"
import useResults from "../customHooks/useResults"
import SearchResultsList from "../components/SearchResultsList"

const SearchScreen = ({ navigation }) => {
    // state
    const [searchTerm, setSearchTerm] = useState("")
    const [isViewDetails, setIsViewDetails] = useState(false)

    // default coordinates, change them later
    const latitude = 53.48369
    const longitude = -113.39648
    const coordinates = { latitude, longitude }

    // custom hook
    const [fetchResults, searchResults, isSearchError] = useResults()

    const onTermSubmit = () => {
        fetchResults(searchTerm, coordinates)
        setSearchTerm("")
    }

    return (
        <View style={styles.container}>
            {isViewDetails ? (
                <Text>Show details here</Text>
            ) : (
                <View style={styles.container}>
                    <SearchBar
                        searchTerm={searchTerm}
                        onSearchTermChange={setSearchTerm}
                        onTermSubmit={onTermSubmit}
                    />
                    <SearchResultsList
                        searchResults={searchResults}
                    />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
        // alignItems: "center",
        // justifyContent: "center"
    }
})

export default SearchScreen
