import imgStorage from "../api/imgStorage" 
import { useState } from "react"


export default function ProductCard() {
    const [loading, setLoading] = useState(true);
    

    return (
        <div className='product-card'>
            {loading && <p>loading...</p> }
            <img 
                src={imgStorage.viscariaTop} alt="viscariaFront" 
                onLoad={() => setLoading(false)}
            />
                         
            <div className="description">
                <div className="product-name">VISCARIA</div>
                <div className="price">$199.00</div>
            </div>
        </div>


    )
}