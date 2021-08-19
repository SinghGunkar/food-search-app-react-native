import React, { useContext } from "react"
import { ListItem } from "react-native-elements"
import deleteIcon from "./DeleteButton"
import editIcon from "./EditButton"
import { selectUserId } from "../redux/slices/favoritesSlice"
import { useSelector } from "react-redux"
import * as RootNavigation from "../navigation/RootNavigation"

const FavoriteRow = ({ favorite }) => {
    const { _id, text } = favorite
    const favoriteID = _id
    const userID = useSelector(selectUserId)

    return (
        <ListItem
            onPress={() => {
                console.log("Search for: " + text + " using \n" + _id)
                RootNavigation.navigate("FavoriteStack", {
                    favorite: text
                })
            }}
            bottomDivider
        >
            <ListItem.Content>
                <ListItem.Title>{text}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron
                Component={deleteIcon}
                favoriteID={favoriteID}
                userID={userID}
            />
            <ListItem.Chevron
                Component={editIcon}
                favoriteID={favoriteID}
                userID={userID}
            />
        </ListItem>
    )
}

export default FavoriteRow
