import { useContext } from "react"
import { ProductContext } from "../context"

export const Basket = () => {
    const context = useContext(ProductContext)
    if (!context) {
        throw new Error("error ...")
    }
    const { state, dispatch } = context

    return <div>
        <h2 className="basket">Basket</h2>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Subtotal</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {state.basket.map(item =>
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.count}</td>
                        <td>{item.price * item.count}</td>
                        <td>
                            <button className="actions add" onClick={() => dispatch({type:"add/count", payload:item.id})}>+</button>
                            <button className="actions reduce" onClick={() => dispatch({type:"reduce/count", payload:item.id})}>-</button>
                            <button className="actions delete" onClick={() => dispatch({type:"delete/product", payload:item.id})}>x</button>
                        </td>
                    </tr>
                )}
            </tbody>

        </table>
    </div>
}