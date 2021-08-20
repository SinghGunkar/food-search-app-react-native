import React, { useEffect, useState } from "react"
import { View } from "react-native"
import { Text } from "react-native-elements"
import yelpAPI from "../APIs/yelp"

const SearchResultsList = ({ searchTerm }) => {
    const [counter, setCounter] = useState(0)

    const hitAPI = useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Counter will increment after 3 seconds")
            setCounter(counter + 1)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <View>
            <Text>Display search results for {searchTerm} here</Text>
            <Text>{counter}</Text>
        </View>
    )
}

export default SearchResultsList
