import React from "react"
import { Icon } from "react-native-elements"
import { useDispatch } from "react-redux"

const addIcon = ({ setIsOverlayShowed }) => {
    const dispatch = useDispatch()

    return (
        <Icon
            name="plus"
            type="evilicon"
            color="black"
            size={30}
            onPress={() => setIsOverlayShowed(prevState => true)}
        />
    )
}

export default addIcon
