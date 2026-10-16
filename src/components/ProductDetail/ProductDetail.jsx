import styles from './ProductDetail.module.css'
import { useParams, useNavigate } from 'react-router'
import productData from '../../api/productData'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/image-gallery.css'
import AddToCart from '../AddToCart/AddToCart.jsx'

export default function ProductDetail() {
    const { productId } = useParams();
    const product = productData.find(prod => prod.id === Number(productId))
    const navigate = useNavigate();

    const imgsForGallery = [
        {
            original: product.img.front,
            thumbnail: product.img.front
        },
        {
            original: product.img.top,
            thumbnail: product.img.top
        },
        {
            original: product.img.side,
            thumbnail: product.img.side
        },
    ]

    return (
        <>
            <button
                className={styles.navBackBtn} 
                onClick={() => navigate(-1)}
            >
                <span>←</span>
                <span>Back</span>
            </button>
            <div className={styles.main}>
                <div className={styles.imgGallaryContainer}>
                    <ImageGallery items={imgsForGallery} />
                </div>

                <div className={styles.productInfo}>
                    <div className={styles.prodName}>{product.name}</div>
                    <div className={styles.prodPrice}>{product.price}</div>
                    <div className={styles.prodIntro}>{product.intro}</div>

                    <div className={styles.toChartBtnsContainer}>
                    <AddToCart 
                        productId={Number(productId)}
                    />    
                    </div>
                </div>
            </div>
        </>
    )
}