import styles from './ProductCard.module.css'
import { useState } from "react"
import NumberSpinner from '../NumberSpinner/NumberSpinner.jsx'
import { Link } from 'react-router'
import Button from '@mui/material/Button'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'

export default function ProductCard({img, name, price, id}) {
//'productItem' is 'productData[n]'
    const [loading, setLoading] = useState(true);    
    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useContext(CartContext);

    return (
        <div className={styles.productCard}>
            <div className={styles.imgContainer}>
                {loading && <p>loading...</p> }
                <Link to={`/shop/products/${id}`}> 
                    <img 
                        src={img.front} alt={name} 
                        onLoad={() => setLoading(false)}
                    />
                </Link>
                
            </div>     
                         
            <div className={styles.description}>
                <div className={styles.productName}>{name}</div>
                <div className={styles.price}>{price}</div>
                <div className={styles.toChartBtnsContainer}>
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
                        onClick={() => addToCart(id, quantity)}
                    >
                        Add to Chart
                    </Button>

                </div>
            </div>
        </div>


    )
}