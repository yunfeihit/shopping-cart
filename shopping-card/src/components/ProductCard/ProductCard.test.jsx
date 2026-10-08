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
    beforeEach(() => {
        render(<ProductCard 
            img={{front: 'test.jpg'}}
            name='testName'
            price='$99'
            id={1}
        />)
    })

    test('show product name', () => {
        expect(screen.getByText('testName')).toBeInTheDocument();
    })

    test('show product price', () => {
        expect(screen.getByText('$99')).toBeInTheDocument();
    })

    test('show product img', () => {
        const productImg = screen.getByRole('img')
        expect(productImg).toHaveAttribute('src', 'test.jpg')
    })

})