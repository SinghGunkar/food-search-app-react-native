import React from "react"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
    MaterialCommunityIcons,
    AntDesign,
    MaterialIcons
} from "@expo/vector-icons"
import { Button } from "react-native"

// screen imports
import FavoritesScreen from "../screens/FavoritesScreen"
import FavoriteScreen from "../screens/FavoriteScreen"
import SearchScreen from "../screens/SearchScreen"
import AccountScreen from "../screens/AccountScreen"
import NearByScreen from "../screens/NearByScreen"
import EditFavoriteScreen from "../screens/EditFavoriteScreen"

const Tab = createMaterialBottomTabNavigator()
const Stack = createNativeStackNavigator()

const FavoritesStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="FavoritesStack"
                component={FavoritesScreen}
                options={{
                    title: "Favorites"
                    // headerRight: () => <AddIcon />
                }}
            />
            <Stack.Screen
                name="FavoriteStack"
                component={FavoriteScreen}
                options={({ route }) => ({
                    title: ` Search results for: ${route.params.favorite}`
                })}
            />
            <Stack.Screen
                name="EditFavoriteStack"
                component={EditFavoriteScreen}
                options={{ title: "Edit Favorite" }}
            />
        </Stack.Navigator>
    )
}
const SearchStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SearchStack"
                component={SearchScreen}
                options={{ title: "Search" }}
            />
            <Stack.Screen
                name="FavoriteStack"
                component={FavoriteScreen}
                options={{ title: "Display Single Favorite " }}
            />
        </Stack.Navigator>
    )
}

const NearByStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="NearByStack"
                component={NearByScreen}
                options={{ title: "Near You" }}
            />
            <Stack.Screen
                name="FavoriteStack"
                component={FavoriteScreen}
                options={{ title: "Display Single Favorite " }}
            />
        </Stack.Navigator>
    )
}

const AccountStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="AccountStack"
                component={AccountScreen}
                options={{ title: "Account" }}
            />
        </Stack.Navigator>
    )
}

const Appstack = () => {
    return (
        <Tab.Navigator
            initialRouteName="Search"
            activeColor="#f0edf6"
        >
            <Tab.Screen
                name="FavoritesTab"
                component={FavoritesStack}
                options={{
                    title: "Favorites",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="heart"
                            color={color}
                            size={26}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="SearchTab"
                component={SearchStack}
                options={{
                    title: "Search",
                    tabBarIcon: ({ color }) => (
                        <AntDesign
                            name="search1"
                            size={24}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="NearByTab"
                component={NearByStack}
                options={{
                    title: "Near you",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons
                            name="near-me"
                            size={24}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="AccountTab"
                component={AccountStack}
                options={{
                    title: "Account",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account"
                            size={24}
                            color={color}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Appstack
