import productData from '../../api/productData'
import Button from '@mui/material/Button'
import NumberSpinner from '../NumberSpinner/NumberSpinner.jsx'
import { CartContext } from '../../context/CartContext.jsx'
import { useState, useContext } from 'react'
import styles from './CartItem.module.css'

export default function CartItem({productId, productQuantity}) {
    const product = productData.find(item => item.id === productId);
    const imgUrl = product.img.front;
    const name = product.name;
    const price = product.price;

    const [quantity, setQuantity] = useState(productQuantity);

    const subTotal = `$${Number(product.price.replace('$','')) * quantity}.00`

    const { resetCart, deleteProduct } = useContext(CartContext);

    return (
        <tr>
            <td>
                <img src={imgUrl} alt="product-img" />
            </td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <NumberSpinner 
                    min={1} 
                    max={100} 
                    defaultValue={quantity}
                    value={quantity}
                    onValueChange={(newQuantity) => {
                        setQuantity(newQuantity);
                        resetCart(productId, newQuantity);
                    }}
                />
            </td>
            <td>{subTotal}</td>
            <td>
                <Button 
                    variant="contained"
                    sx={{
                        backgroundColor: 'brown',
                        textTransform: 'none',
                        height: '40px'
                    }}
                    onClick={() => deleteProduct(productId)}
                >
                    Remove
                </Button>
            </td>
        </tr>
    )
}