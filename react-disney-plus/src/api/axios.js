import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "8eede05e622462f73a44856a085d18e5",
        language: "ko-KR",
    }
})

export default instance