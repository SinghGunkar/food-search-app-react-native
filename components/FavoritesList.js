import React from "react"
import { StyleSheet, FlatList } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { selectAllFavorites } from "../redux/slices/favoritesSlice"
import FavoriteRow from "./FavoriteRow"

const FavoritesList = () => {
    const favoritesArray = useSelector(selectAllFavorites)
    const dispatch = useDispatch()

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green"
    },

    bottomTextStyle: {
        textAlign: "center",
        marginBottom: 10
    },

    registerLink: {
        color: "#3c6dcc"
    }
})

export default FavoritesList
