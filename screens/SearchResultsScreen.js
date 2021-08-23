import React, { useEffect, useState } from "react"
import { View, StyleSheet } from "react-native"
import { Text, Button } from "react-native-elements"
import SearchResultsList from "../components/SearchResultsList"
import useResults from "../customHooks/useResults"
import ipGeoLocationAPI from "../APIs/ipGeolocation"

const SearchResultsScreen = ({ route }) => {
    // state
    const [searchTerm, setSearchTerm] = useState("")
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const { favorite } = route.params

    // custom hook
    const [fetchResults, searchResults] = useResults(favorite)

    // fetch results via useEffect
    useEffect(() => {
        setSearchTerm(favorite)
        setIsLoading(true)
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
    }, [])

    return (
        <View style={styles.container}>
            {isError ? (
                <Text h3 style={styles.errorMessage}>
                    Error when searching Please try again later
                </Text>
            ) : isLoading ? (
                <Button title="Loading button" loading type="clear" />
            ) : (
                <SearchResultsList searchResults={searchResults} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around"
    },
    errorMessage: {
        fontWeight: "300",
        padding: 50,
        textAlign: "center",
        top: "30%"
    }
})

export default SearchResultsScreen
