import React, { useReducer } from "react"
import { Icon } from "react-native-elements"
import { useDispatch } from "react-redux"
import {
    onPressedDeleteFavorite,
    fetchFavorites,
    setFavorites
} from "../redux/slices/favoritesSlice"

const deleteIcon = ({ favoriteID, userID }) => {
    const dispatch = useDispatch()

    return (
        <Icon
            name="trash"
            type="evilicon"
            color="black"
            size={30}
            onPress={() => {
                dispatch(
                    onPressedDeleteFavorite({ favoriteID, userID })
                )

                dispatch(fetchFavorites())
                    .unwrap()
                    .then(currentFavoriteData => {
                        setFavorites(currentFavoriteData)
                        console.log(currentFavoriteData.length)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }}
        />
    )
}

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

export { deleteIcon, editIcon }
