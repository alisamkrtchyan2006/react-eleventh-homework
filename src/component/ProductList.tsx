import { useContext } from "react"
import { ProductContext } from "../context"

export const ProductList = () => {

    const context = useContext(ProductContext)
    if(!context) {
        throw new Error ("error...")
    }

    const {state, dispatch} = context
    return <>
    <h2 className="product">ProductList</h2>
    <div className="product-block">
        {
            state.products.map(product => 
                <div key={product.id}>
                    <img className="img"
                        src={product.pic}
                    />
                    <h4>{product.name}</h4>
                    <h5>{product.price}</h5>
                    <button className="move" onClick={() => dispatch({type:"move/product", payload:product.id})}>Move</button>
                </div>
            )
        }
    </div>
    </>
}