import ProductCard from './ProductCard.jsx'
import { render, screen } from '@testing-library/react'

//mock the router
vi.mock('react-router', () => ({
    Link: ({children}) => <div>{children}</div>
}))

//mock 'AddToCart'
vi.mock('../AddToCart/AddToCart.jsx', () => ({
    default: () => <div>Mock AddToCart</div>
}))

describe('ProductCard', () => {
    test('show product name', () => {
        render(<ProductCard 
            img = 'imgUrl'
            name = 'testName'
            price = '$99'
            id = {1}
        />)

        expect(screen.getByText('testName')).toBeInTheDocument();
    })

    test('show product price', () => {
        render(<ProductCard 
            img = 'imgUrl'
            name = 'testName'
            price = '$99'
            id = {1}
        />)

        expect(screen.getByText('$99')).toBeInTheDocument();
    })

})