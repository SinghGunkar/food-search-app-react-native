import React from "react"
import { View, StyleSheet, Button } from "react-native"
import FavoritesList from "../components/FavoritesList"
import { getCurrentUserInfo } from "../redux/slices/authSlice"
import { useDispatch } from "react-redux"

import {
    setFavorites,
    setUserId,
    setEmail,
    setName
} from "../redux/slices/favoritesSlice"

const FavoritesScreen = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const currentUserInfo = dispatch(getCurrentUserInfo())

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

            <Button
                title="Go To Single Favorite"
                onPress={() => navigation.navigate("FavoriteStack")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink"
    }
})

export default FavoritesScreen
