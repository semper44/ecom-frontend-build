import axios from "axios"

const baseURL=process.env.REACT_APP_URLS

const token= JSON.parse(localStorage.getItem("authToken"))|| null
// 
const axiosInstance= axios.create({
    baseURL:baseURL,
    timeout:3000,
    headers:{
        "Authorization": 'Bearer '+(token?.access),
        'Content-Type':'application/json',
        // accept:"application/json"
    },
})

export default axiosInstance