import { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import productData from '../../api/productData.js'
import CartItem from '../../components/CartItem/CartItem.jsx'
import styles from './Cart.module.css';

export default function Cart() {
    const { cart } = useContext(CartContext);
    
    return (
        <>
            <div>Cart Page</div>
            <table className={styles.cartItems}>
                <tr>
                    <th colSpan='2'>ITEM</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
                </tr>
                {cart && cart.map(item => 
                <CartItem 
                    productId = {item.id}
                    productQuantity = {item.quantity}
                />)}
            </table>
        </>

    )
}