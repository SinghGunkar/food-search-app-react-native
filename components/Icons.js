import React from "react"
import { Icon } from "react-native-elements"

const deleteIcon = () => {
    return (
        <Icon
            name="trash"
            type="evilicon"
            color="black"
            size={30}
            onPress={() => console.log("delete fav")}
        />
    )
}

const editIcon = () => {
    return (
        <Icon
            name="pencil"
            type="evilicon"
            color="black"
            size={30}
            onPress={() => console.log("edit fav")}
        />
    )
}

export { deleteIcon, editIcon }
