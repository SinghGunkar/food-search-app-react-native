import React from "react"
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
                // delete existing favorite in database
                dispatch(
                    onPressedDeleteFavorite({ favoriteID, userID })
                )

                /*
                fetch updated list of favorites from redux store 
                dispatch new favorites to redux store 
                */
                dispatch(fetchFavorites())
                    .unwrap()
                    .then(currentFavoriteData => {
                        dispatch(setFavorites(currentFavoriteData))
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }}
        />
    )
}

export default deleteIcon
