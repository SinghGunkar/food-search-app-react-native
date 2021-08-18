import React from "react"
import { StyleSheet, FlatList } from "react-native"
import { ListItem } from "react-native-elements"
import { useSelector } from "react-redux"
import { selectAllFavorites } from "../redux/slices/favoritesSlice"

const FavoritesList = () => {
    const favoritesArray = useSelector(selectAllFavorites)

    const renderItem = ({ item }) => {
        return (
            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>{item.text}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        )
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
