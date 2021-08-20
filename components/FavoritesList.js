import React from "react"
import { FlatList } from "react-native"
import { useSelector } from "react-redux"
import { selectAllFavorites } from "../redux/slices/favoritesSlice"
import FavoriteRow from "./FavoriteRow"

const FavoritesList = () => {
    const favoritesArray = useSelector(selectAllFavorites)

    const renderItem = ({ item }) => {
        return <FavoriteRow favorite={item} />
    }
    return (
        <FlatList
            data={favoritesArray}
            renderItem={renderItem}
            keyExtractor={item => item.id + Math.random().toString()}
            windowSize={1.5}
        />
    )
}

export default FavoritesList
