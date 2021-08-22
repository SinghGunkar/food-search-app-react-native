import axios from "axios"
import { IP_API_KEY } from "@env"

const instance = axios.create({
    baseURL: "https://api.ipgeolocation.io/ipgeo",
    params: { apiKey: IP_API_KEY }
})

export default instance
