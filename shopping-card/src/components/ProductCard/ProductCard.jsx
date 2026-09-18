import styles from './ProductCard.module.css'
import { useState } from "react"
import { Link } from 'react-router'
import AddToCart from '../AddToCart/AddToCart.jsx'

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
                <AddToCart 
                    productId={id}
                />
                </div>
            </div>
        </div>


    )
}