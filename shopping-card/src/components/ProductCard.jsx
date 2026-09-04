import styles from './ProductCard.module.css'
import { useState } from "react"

export default function ProductCard({img, name, price}) {
//'productItem' is 'productData[n]'
    const [loading, setLoading] = useState(true);    

    return (
        <div className={styles.productCard}>
            <div className={styles.imgContainer}>
                {loading && <p>loading...</p> }
                <img 
                    src={img.front} alt={name} 
                    onLoad={() => setLoading(false)}
                />
            </div>     
                         
            <div className={styles.description}>
                <div className={styles.productName}>{name}</div>
                <div className={styles.price}>{price}</div>
            </div>
        </div>


    )
}