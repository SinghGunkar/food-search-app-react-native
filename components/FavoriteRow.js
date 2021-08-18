import React from "react"
import { ListItem } from "react-native-elements"
import { deleteIcon, editIcon } from "./Icons"

const FavoriteRow = ({ favorite }) => {
    const { _id, text } = favorite

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
            <ListItem.Chevron Component={deleteIcon} />
            <ListItem.Chevron Component={editIcon} />
        </ListItem>
    )
}

export default FavoriteRow
