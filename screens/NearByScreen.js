import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import useLocation from "../customHooks/useLocation"
import useResults from "../customHooks/useResults"
import SearchResultsList from "../components/SearchResultsList"

const NearByScreen = () => {
    const [fetchLocation, location, isLocationError] = useLocation()
    const [fetchResults, searchResults, isSearchError] = useResults()
    const [isError, setIsError] = useState(false)

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

        if (isLocationError || isSearchError) {
            setIsError(true)
        }
    }, [location])

    return (
        <View style={styles.container}>
            {isError ? (
                <Text>
                    {
                        "Error when searching, check permissions ot try again later"
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
    }
})

export default NearByScreen
