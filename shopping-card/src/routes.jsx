import App from "./App";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import ProductDetail from "./components/ProductDetail/ProductDetail";

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'shop',
                element: <Shop />,
                children: [
                    {
                        path: "products/:productId",
                        element: <ProductDetail />
                    }
                ]
            },
            {
                path: 'cart',
                element: <Cart />
            }
        ]
    }    
]

export default routes;