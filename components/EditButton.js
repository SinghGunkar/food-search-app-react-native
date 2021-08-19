import React from "react"
import { Icon } from "react-native-elements"
import { useDispatch } from "react-redux"
import {
    onPressedDeleteFavorite,
    fetchFavorites,
    setFavorites
} from "../redux/slices/favoritesSlice"

const editIcon = ({ favoriteID, userID }) => {
    return (
        <Icon
            name="pencil"
            type="evilicon"
            color="black"
            size={30}
            onPress={() => console.log(favoriteID + userID)}
        />
    )
}

export default editIcon
