import ProductCard from "../../components/ProductCard/ProductCard"
import productData from "../../api/productData"
import styles from './Shop.module.css'
import { Link, Outlet, useLocation } from 'react-router'

export default function Shop() {
    const location = useLocation();
    const isProductDetail = location.pathname.startsWith('/shop/products/')

       
    return (
        
        <div className="page">
            <div>Shop Page</div>

            {isProductDetail ? 
                <Outlet /> :
                (
                    <div className={styles.cardsContainer}>
                        {productData.map(product => 
                            <ProductCard 
                                img = {product.img}
                                name = {product.name}
                                price = {product.price}
                                id = {product.id}
                                key = {product.id}
                            />
                        )}
                    </div>
                )
            }

        </div>
    )
}