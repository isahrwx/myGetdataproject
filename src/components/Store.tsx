import { useContext } from "react"
import { GetProductsContext } from "../contexts/Getdatacontextprovider"

const Store = () => {
    const products=useContext(GetProductsContext);
    console.log(products);
  return (
    <div>
      {products.map(product=><p key={product.id}>{product.title}</p>)}
    </div>
  )
}

export default Store
