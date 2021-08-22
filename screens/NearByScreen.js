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
    const [refresh, setRefresh] = useState(false)

    // first fetch user coordinate(s) via geo API
    useEffect(() => {
        dispatch(fetchUserCoords())
    }, [refresh])

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

    // conditionally render one of three states
    // results || loading || error
    return (
        <View style={styles.container}>
            {(() => {
                if (isError) {
                    return (
                        <View>
                            <Text style={styles.errorMessage}>
                                There was an error, please try again
                                later. Ensure that you have location
                                enabled for this app and that you are
                                connected to Wifi
                            </Text>
                            <Button
                                title="Refresh"
                                type="clear"
                                onPress={() =>
                                    setRefresh(
                                        prevState => !prevState
                                    )
                                }
                            />
                        </View>
                    )
                }
                if (isLoading) {
                    return (
                        <Button
                            title="Loading button"
                            loading
                            type="clear"
                        />
                    )
                }

                return <SearchResultsList searchResults={results} />
            })()}
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
        textAlign: "center",
        marginTop: 20,
        fontWeight: "300",
        fontSize: 15
    }
})

export default NearByScreen
