import { IAction, IState } from "./type";

export const reducer = (state : IState, action : IAction) : IState => {
    switch(action.type) {
        case "move/product" :
            const productToMove = state.products.find(product => product.id === action.payload);
    
        if (!productToMove) return state;

        const basketItem = state.basket.find(item => item.id === productToMove.id);

        if (basketItem) {
            return {
                ...state,
                basket: state.basket.map(item => 
                    item.id === productToMove.id
                        ? { ...item, count: item.count + 1 }
                        : item
                )
            };
        }
        return {
            ...state,
            basket: [...state.basket, { ...productToMove, count: 1 }]
        }

        case "delete/product" :
            return {
                ...state,
                basket: state.basket.filter(item => item.id != action.payload)
            }


        case "add/count" :
            return {
                ...state,
                basket: state.basket.map(item => 
                    item.id == action.payload
                    ? {...item, count: item.count + 1}
                    : item
                )
                    
            }

        case "reduce/count" :
            return {
                ...state,
                basket: state.basket.map(item => 
                    item.id == action.payload && item.count > 1
                    ? {...item, count: item.count - 1}
                    : item
                )
                    
            }



        default :
        return state
    }
}