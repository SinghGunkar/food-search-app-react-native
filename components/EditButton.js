import React from "react"
import { Icon } from "react-native-elements"
import * as RootNavigation from "../navigation/RootNavigation"

const editIcon = ({ favoriteID, userID, text }) => {
    return (
        <Icon
            name="pencil"
            type="evilicon"
            color="black"
            size={35}
            onPress={() =>
                RootNavigation.navigate("EditFavoriteStack", {
                    favoriteID,
                    userID,
                    text
                })
            }
        />
    )
}

export default editIcon
