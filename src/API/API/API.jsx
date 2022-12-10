import axios from "axios"

const baseURL="https://api.stroymarkets.uz";
const req={
    getPosts:async()=>{
        const response=await axios.get(`${baseURL}/ru/api/v1/home/`);
        if(response.status===200){
            return response.data;
        }
    },
    getProductsCategory: ()=>  axios(`${baseURL}/uz/api/v1/category/1/`)
}
export default req;
