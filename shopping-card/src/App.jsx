import { Link, Outlet } from "react-router"
import './App.css'
import Badge from '@mui/material/Badge';
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

export default function App() {
    const { cart } = useContext(CartContext);

    return (
        <header>
            <div className="title">PingPang Blades</div>

            <nav className='pageNav'>
                <Link to='home' className='pageLink'>Home</Link>
                <Link to='shop' className='pageLink'>Shop</Link>
                <Badge badgeContent={cart.length} color="primary">
                    <Link to='cart' className='pageLink'>Cart</Link>
                </Badge>            
            </nav>

            <Outlet />
        </header>    
        
    )
}