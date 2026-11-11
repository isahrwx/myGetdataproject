import { createContext, useEffect, useState } from "react"
import { getData } from './../services/API';


export const GetProductsContext=createContext<any>(null)
const GetProductcontextprovider = ({children}) => {
    const [product,setProduct]=useState([]);
    useEffect( ()=>{
        const fetchData=async()=>{
            setProduct(await getData() );
        }
        fetchData();
    },[]
)
    

  return (
   <GetProductsContext.Provider value={product}>
    {children}
   </GetProductsContext.Provider>
  )
}

export default GetProductcontextprovider
