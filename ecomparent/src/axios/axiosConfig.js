import axios from "axios"

const baseURL=process.env.REACT_APP_URLS


const token= JSON.parse(window.localStorage.getItem("authToken"))|| null

const axiosInstance= axios.create({
    baseURL:baseURL,
    timeout:3000,
    headers:{
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+ token.access
    },
})

export default axiosInstance