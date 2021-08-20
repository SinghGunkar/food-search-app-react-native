import axios from "axios"
import { YELP_API_KEY } from "@env"

const yelp = axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer " + YELP_API_KEY
    }
})

export default yelp
