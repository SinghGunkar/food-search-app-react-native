import { useState } from "react"
import yelpAPI from "../APIs/yelp"

const useResults = () => {
    const [searchResults, setSearchResults] = useState([])
    const [isSearchError, setIsSearchError] = useState(false)

    const fetchResults = async (
        searchTerm,
        { latitude, longitude }
    ) => {
        try {
            
            const response = await yelpAPI.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    latitude,
                    longitude
                }
            })
            
            setSearchResults(response.data.businesses)
            
        } catch (err) {
            console.log(err)
            console.log("Something went wrong in useResults.js")
            setIsSearchError(true)
        }
    }

    return [fetchResults, searchResults, setSearchResults, isSearchError]
}

export default useResults