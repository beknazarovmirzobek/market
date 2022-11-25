import axios from "axios"

const baseURL="https://api.stroymarkets.uz/ru/api/v1/home/";
const req={
    getPosts:async()=>{
        const response=await axios.get(baseURL);
        if(response.status===200){
            return response.data;
        }
    }
}
export default req;