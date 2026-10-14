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

            <nav className='page-nav'>
                <Link to='home'>Home</Link>
                <Link to='shop'>Shop</Link>
                <Badge badgeContent={cart.length} color="primary">
                    <Link to='cart'>Cart</Link>
                </Badge>            
            </nav>

            <Outlet />
        </header>    
        
    )
}