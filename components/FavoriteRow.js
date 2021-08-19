import React from "react"
import { ListItem } from "react-native-elements"
import deleteIcon from "./DeleteButton"
import editIcon from "./EditButton"
import { selectUserId } from "../redux/slices/favoritesSlice"
import { useSelector } from "react-redux"

const FavoriteRow = ({ favorite }) => {
    const { _id, text } = favorite
    const favoriteID = _id
    const userID = useSelector(selectUserId)

    return (
        <ListItem
            onPress={() =>
                console.log("Search for: " + text + " using \n" + _id)
            }
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
            <ListItem.Chevron Component={editIcon} />
        </ListItem>
    )
}

export default FavoriteRow
