import ProductCard from "../../components/ProductCard"
import productData from "../../api/productData"
import styles from './Shop.module.css'

export default function Shop() {
       
    return (
        <div className="page">
            <div>Shop Page</div>
            <div className={styles.cardsContainer}>
                {productData.map(product => 
                    <ProductCard 
                        key = {product.id}
                        img = {product.img}
                        name = {product.name}
                        price = {product.price}
                    />
                )}
            </div>
            
        </div>
    )
}