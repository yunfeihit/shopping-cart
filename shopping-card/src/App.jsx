import { Link, Outlet } from "react-router"

export default function App() {


    return (
        <header>
            <div className="title">PingPang Blades</div>

            <nav>
                <Link to='home'>Home</Link>
                <Link to='shop'>Shop</Link>
                <Link to='cart'>Cart</Link>            
            </nav>

            <Outlet />
        </header>

        
        
    )
}