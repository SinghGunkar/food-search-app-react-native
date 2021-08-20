import React from "react"
import { ListItem, Text } from "react-native-elements"
import { StyleSheet } from "react-native"

const SearchRow = ({ data }) => {
    const {
        categories,
        distance,
        location,
        name,
        rating,
        price,
        is_closed
    } = data

    const categoriesAsString = categories
        .map(({ title }) => {
            return title + " "
        })
        .toString()
        .replaceAll(",", "")

    return (
        <ListItem bottomDivider containerStyle={styles.rowContainer}>
            <ListItem.Content style={styles.leftContainer}>
                <ListItem.Title>
                    <Text h4>{name}</Text>
                </ListItem.Title>

                <ListItem.Subtitle>
                    {categoriesAsString}
                </ListItem.Subtitle>
                <Text>
                    {location.address1}
                    {" | "}
                    {Math.round(distance / 1000)}km
                </Text>
            </ListItem.Content>

            <ListItem.Content style={styles.rightContainer}>
                <ListItem.Title style={styles.rightText}>
                    <Text>
                        {is_closed}
                        {"\n"}
                        {rating}
                        {"\n"}
                        {price ? price : ""}
                    </Text>
                </ListItem.Title>
            </ListItem.Content>
        </ListItem>
    )
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",

        justifyContent: "space-between",
        padding: 8
    },
    leftContainer: {
        flex: 4
    },
    rightContainer: {
        fontSize: 10,
        alignItems: "flex-end"
    },
    rightText: {
        fontSize: 15,
        textAlign: "right"
    }
})

export default SearchRow
