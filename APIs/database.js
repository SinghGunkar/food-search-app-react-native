import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

const instance = axios.create({
    baseURL: "http://143.198.157.149/"
})

instance.interceptors.request.use(
    // before request is sent => add token to request headers
    async config => {
        const token = await AsyncStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },

    // otherwise handle error
    err => {
        return Promise.reject(err)
    }
)

export default instance
