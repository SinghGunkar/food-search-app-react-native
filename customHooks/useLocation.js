import * as Location from "expo-location"
import { useState } from "react"

const useLocation = () => {
    const [location, setLocation] = useState(null)
    const [isLocationError, setIsLocationError] = useState(false)

    const fetchLocation = async () => {
        try {
            let { status } =
                await Location.requestForegroundPermissionsAsync()

            if (status !== "granted") {
                setIsLocationError(true)
                return
            }

            let locationData = await Location.getCurrentPositionAsync(
                {}
            )
            setIsLocationError(false)
            setLocation(locationData)
        } catch (err) {
            console.log(err)
            setIsLocationError(true)
        }
    }

    return [fetchLocation, location, isLocationError]
}

export default useLocation
