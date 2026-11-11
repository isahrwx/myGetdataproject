import axios from "axios"

export const getData =async ()=>{
    const BASE_URL="https://fakestoreapi.com/";
    const response = await  axios.get(`${BASE_URL}/products`);
    return response.data;
}