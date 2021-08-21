import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Button } from "react-native-elements"
import { useDispatch, useSelector } from "react-redux"
import { selectAPIState } from "../redux/slices/apiSlice"
import {
    fetchUserCoords,
    fetchSearchResults
} from "../redux/slices/apiSlice"
import SearchResultsList from "../components/SearchResultsList"
import {
    setIsError,
    setIsLoading,
    setLocationAPIStatus
} from "../redux/slices/apiSlice"

const NearByScreen = () => {
    const dispatch = useDispatch()

    // first fetch user coordinate(s) via geo API
    useEffect(() => {
        dispatch(fetchUserCoords())
    })

    // state
    const apiState = useSelector(selectAPIState)
    const [results, setResults] = useState({})
    const {
        coords,
        isError,
        isLoading,
        locationAPIStatus,
        searchAPIStatus
    } = apiState

    // using fetched coordinates => get search results
    useEffect(() => {
        if (locationAPIStatus === "fulfilled") {
            console.log("test")
            dispatch(
                fetchSearchResults({
                    searchTerm: "food",
                    latitude: coords.coords.latitude,
                    longitude: coords.coords.longitude
                })
            )
                .unwrap()
                .then(originalPromiseResult => {
                    setResults(originalPromiseResult)
                })
                .catch(rejectedValueOrSerializedError => {
                    dispatch(setIsError(true))
                    dispatch(setIsLoading(false))
                    dispatch(setLocationAPIStatus("failed"))
                })
        }
    }, [locationAPIStatus])

    return (
        <View style={styles.container}>
            {(() => {
                if (isError) {
                    return (
                        <Text style={styles.errorMessage}>
                            Error try again later || display refresh
                            button
                        </Text>
                    )
                }
                if (isLoading) {
                    return <Button title="Loading button" loading />
                }

                return <SearchResultsList searchResults={results} />
            })()}
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
    },
    loader: {
        backgroundColor: "red"
    }
})

export default NearByScreen
