import styles from './ProductDetail.module.css'
import { useParams } from 'react-router'
import { Link } from 'react-router'
import productData from '../../api/productData'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/image-gallery.css'
import NumberSpinner from '../NumberSpinner/NumberSpinner.jsx'
import Button from '@mui/material/Button';


export default function ProductDetail() {
    const { productId } = useParams();
    const product = productData.find(prod => prod.id === Number(productId))
    
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
            <div className={styles.navLink}>
                <Link to='/home'>Home</Link>
                <span>/</span>
                <Link to='/shop'>Shop</Link>
                <span>/</span>
                <p>{product.name}</p>
            </div>

            <div className={styles.main}>
                <div className={styles.imgGallaryContainer}>
                    <ImageGallery items={imgsForGallery} />
                </div>

                <div className={styles.productInfo}>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                    <div>{product.intro}</div>

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



        </>
    )
}