import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Button } from "react-native-elements"
import SearchBar from "../components/Searchbar"
import useResults from "../customHooks/useResults"
import SearchResultsList from "../components/SearchResultsList"
import ipGeoLocationAPI from "../APIs/ipGeolocation"

const SearchScreen = () => {
    // state
    const [searchTerm, setSearchTerm] = useState("")
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    // custom hook
    const [fetchResults, searchResults] = useResults()

    const onTermSubmit = () => {
        // on submit another request if reqeust is not loading
        if (!isLoading) {
            // reset state
            setIsError(false)
            setIsLoading(true)

            // define fetchLocationData
            async function fetchLocationData() {
                const response = ipGeoLocationAPI.get()
                return response
            }

            // then fetch data from yelp using user location
            fetchLocationData()
                .then(({ data }) => {
                    const { longitude, latitude } = data
                    fetchResults(searchTerm, {
                        latitude,
                        longitude
                    })
                        .then(() => {
                            setIsLoading(false)
                        })
                        .catch(e => {
                            setIsError(true)
                            setIsLoading(false)
                        })
                })
                .catch(e => {
                    setIsError(true)
                    setIsLoading(false)
                })
        }
    }

    // conditionally render content
    return (
        <View style={styles.container}>
            {isError ? (
                <View>
                    <Text style={styles.errorMessage}>
                        There was an error, please try again later
                    </Text>
                    <Button
                        title="Go Back"
                        type="clear"
                        style={styles.loader}
                        onPress={() => {
                            setIsError(false)
                        }}
                    />
                </View>
            ) : isLoading ? (
                <Button
                    title="Loading button"
                    loading
                    type="clear"
                    style={styles.loader}
                />
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
        backgroundColor: "white",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    errorMessage: {
        textAlign: "center",
        fontWeight: "300",
        fontSize: 15
    }
})

export default SearchScreen
