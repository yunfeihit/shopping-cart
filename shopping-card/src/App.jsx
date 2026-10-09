import { Link, Outlet } from "react-router"
import './App.css'

export default function App() {

    return (
        <header>
            <div className="title">PingPang Blades</div>

            <nav className='page-nav'>
                <Link to='home'>Home</Link>
                <Link to='shop'>Shop</Link>
                <Link to='cart'>Cart</Link>            
            </nav>

            <Outlet />
        </header>    
        
    )
}