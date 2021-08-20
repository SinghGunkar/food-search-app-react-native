import React from "react"
import { FlatList } from "react-native"
import SearchRow from "./SearchRow"

const SearchResultsList = ({ searchResults }) => {
    const renderItem = ({ item }) => {
        return <SearchRow data={item} />
    }
    return (
        <FlatList
            data={searchResults}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}

export default SearchResultsList
