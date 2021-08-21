import React, { useEffect, useState } from "react"
import { View, StyleSheet, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { handleUserLogout } from "../redux/slices/authSlice"
import {
    selectCoords,
    fetchUserCoords
} from "../redux/slices/apiSlice"

const AccountScreen = () => {
    const [refresh, setRefresh] = useState("dummyString")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserCoords())
    }, [refresh])

    const coords = useSelector(selectCoords)
    console.log("Account screen: ")
    // console.log(coords)

    return (
        <View style={styles.container}>
            <Button
                title="Logout"
                onPress={() => {
                    dispatch(handleUserLogout())
                }}
            />
            <Button
                title="Refresh"
                onPress={() => {
                    setRefresh("dummyString1")
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default AccountScreen
