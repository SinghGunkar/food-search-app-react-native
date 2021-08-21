import React, { useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"
import useLocation from "../customHooks/useLocation"
import useResults from "../customHooks/useResults"
import SearchResultsList from "../components/SearchResultsList"

const NearByScreen = () => {
    const [fetchLocation, location, isLocationError] = useLocation()
    const [fetchResults, searchResults, isSearchError] = useResults()

    // get user longitude and latitude
    useEffect(() => {
        fetchLocation()
    }, [])

    // after getting user longitude and latitude => initiate search
    useEffect(() => {
        if (location && !isLocationError) {
            const { latitude, longitude } = location.coords
            fetchResults("food", { latitude, longitude })
        }
    }, [location])

    return (
        <View style={styles.container}>
            {isLocationError || isSearchError ? (
                <Text style={styles.errorMessage}>
                    {
                        "Error when searching, check permissions or try again later"
                    }
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
        textAlign: "center",
        marginTop: 20,
        fontWeight: "300"
    }
})

export default NearByScreen
