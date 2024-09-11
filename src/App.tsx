import { useReducer } from 'react'
import './App.css'
import { Basket } from './component/Basket'
import { ProductList } from './component/ProductList'
import { initialState, ProductContext } from './context'
import { reducer } from './reducer'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <ProductContext.Provider value={{state, dispatch}}>
        <ProductList />
        <Basket />
      </ProductContext.Provider>
    </>
  )
}

export default App
