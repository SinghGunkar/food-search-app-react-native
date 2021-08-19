import React, {
    createContext,
    useState,
    useLayoutEffect
} from "react"
import { View, StyleSheet, Button, Text } from "react-native"
import FavoritesList from "../components/FavoritesList"
import { getCurrentUserInfo } from "../redux/slices/authSlice"
import { useDispatch } from "react-redux"
import AddIcon from "../components/AddButton"
import AddFavoriteOverlay from "../components/Overlay"

import {
    setFavorites,
    setUserId,
    setEmail,
    setName
} from "../redux/slices/favoritesSlice"

const UserEditingContext = createContext()

const FavoritesScreen = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const currentUserInfo = dispatch(getCurrentUserInfo())
    const [isOverlayShowed, setIsOverlayShowed] = useState(false)

    // header button requires interaction with FavoritesScreen
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <AddIcon setIsOverlayShowed={setIsOverlayShowed} />
            )
        })
    }, [navigation, setIsOverlayShowed])

    /* 
    when favorites screen loads, fetch current info to render most up to date info
    Note: 
    unwrap "currentUserInfo" because "getCurrentUserInfo()" created by createAsyncThunk will always 
    return a resolved promise with either the fulfilled action object or rejected object
    */
    currentUserInfo
        .unwrap()
        .then(currentUserData => {
            const { email, _id, favorites, name } = currentUserData
            // set state using reducers from slices/FavoritesSlice.js
            dispatch(setEmail(email))
            dispatch(setUserId(_id))
            dispatch(setFavorites(favorites))
            dispatch(setName(name))
        })
        .catch(error => {
            console.log(error)
        })

    return (
        <View style={styles.container}>
            <FavoritesList />
            <AddFavoriteOverlay
                setIsOverlayShowed={setIsOverlayShowed}
                isOverlayShowed={isOverlayShowed}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default FavoritesScreen
export { UserEditingContext }
