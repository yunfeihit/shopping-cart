import { createContext, useState } from 'react'

export const CartContext = createContext();

// Data format:
// [
//     {id: 1, quantity: 3},
//     {id: 3, quantity: 4},
//     ...
// ]

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (productId, quantity) => {
        setCart(prevCart => {
            const isProductExist = prevCart.find(item => item.id === productId)

            if(isProductExist) {
                return prevCart.map(item => {
                    return item.id === productId 
                        ? {...item, quantity: item.quantity + quantity}
                        : item
                })
            }

            return [...prevCart, {id: productId, quantity: quantity}]
        }            
        )         
    }

    const resetCart = (productId, newQuantity) => (
        setCart(prevCart => 
            prevCart.map(item => 
                item.id === productId
                    ? {...item, quantity: newQuantity}
                    : item
            )
        )      
    )

    const deleteProduct = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId))
    }

    return (
        <CartContext.Provider value={{cart, addToCart, resetCart, deleteProduct}}>
            { children }
        </CartContext.Provider>
    )
}