import { createContext, useState } from 'react'

export const CartContext = createContext();

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

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            { children }
        </CartContext.Provider>
    )
}