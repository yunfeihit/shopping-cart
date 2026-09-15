import styles from './ProductCard.module.css'
import { useState } from "react"
import NumberSpinner from '../NumberSpinner/NumberSpinner.jsx'
import { Link } from 'react-router'
import Button from '@mui/material/Button';


export default function ProductCard({img, name, price, id}) {
//'productItem' is 'productData[n]'
    const [loading, setLoading] = useState(true);    

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
                    />
                    <Button 
                        variant="contained"
                        sx={{
                            backgroundColor: 'brown',
                            textTransform: 'none'
                        }}
                    >
                        Add to Chart
                    </Button>

                </div>
            </div>
        </div>


    )
}