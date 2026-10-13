import { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import productData from '../../api/productData.js'
import CartItem from '../../components/CartItem/CartItem.jsx'
import styles from './Cart.module.css';

export default function Cart() {
    const { cart, getTotal } = useContext(CartContext);
    
    return (
        <>
            <table className={styles.cartItems}>
                <colgroup>
                    <col style={{width: '100px'}} />
                    <col style={{width: '100px'}} />
                    <col style={{width: '100px'}} />
                    <col style={{width: '200px'}} />
                    <col style={{width: '100px'}} />
                </colgroup>
                <tr className={styles.headerRow}>
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
                <tr className={styles.endRow}>
                    <th colSpan='4'>TOTAL:</th>
                    <th>{`$${getTotal()}`}</th>
                </tr>
            </table>

        </>

    )
}