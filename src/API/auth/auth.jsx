import axios from "axios";
const baseURL="https://api.stroymarkets.uz";



const data={
    setLogin: (params)=>  axios.post(`${baseURL}/login/`,params),
    setRegister: (params)=>  axios.post(`${baseURL}/register/`,params),
    setSms: (params)=>  axios.post(`${baseURL}/register_accepted/`,params),
    setLike: (params)=>  axios.post(`${baseURL}/uz/api/v1/post/like/`,params ,{
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem("token")}` 
        }
      }),
    getLike:()=> axios(`${baseURL}/uz/api/v1/get/like/`,{
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem("token")}` 
        }
      })
}
 export default data;