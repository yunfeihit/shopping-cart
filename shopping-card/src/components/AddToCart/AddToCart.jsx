import NumberSpinner from '../NumberSpinner/NumberSpinner.jsx'
import Button from '@mui/material/Button'
import { useState } from "react"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import styles from './AddToCart.module.css'

export default function AddToCart({ productId }) {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    return (
        <div className={styles.addToCart}>
            <NumberSpinner 
                min={1} 
                max={100} 
                defaultValue={1}
                value={quantity}
                onValueChange={setQuantity}
            />
            <Button 
                variant="contained"
                sx={{
                    backgroundColor: 'brown',
                    textTransform: 'none'
                }}
                onClick={() => addToCart(productId, quantity)}
            >
                Add to Cart
            </Button>
        </div>
    )
}