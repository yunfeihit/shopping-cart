import { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import productData from '../../api/productData.js'


export default function Cart() {
    const { cart } = useContext(CartContext);
    
    const productNameById = (id) => productData.find(item => item.id ===id).name;


    return (
        <>
            <div>Cart Page</div>
            <div>
                {cart && cart.map(item => {
                    return (
                        <>
                            <div>{`Product:${productNameById(item.id)}`}</div>
                            <div>{`Quantity:${item.quantity}`}</div>
                        </>
                    )
                })}
            </div>
        </>

    )
}