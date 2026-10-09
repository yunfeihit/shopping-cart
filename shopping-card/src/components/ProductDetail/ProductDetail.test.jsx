import ProductDetail from "./ProductDetail";
import { render, screen } from '@testing-library/react'

//mock ImageGallery
vi.mock('react-image-gallery', () => ({
    default: ({items}) => (
        <div data-testid='image-gallery'>
            {items.length} imgs
        </div>
    )
}))

//mock AddToCart
vi.mock('../AddToCart/AddToCart.jsx', () => ({
    default: ({productId}) => (
        <div>AddToCart productId: {productId}</div>
    )
}))

//mock useParams(directally make it return '{productId: 5}')
//mock Link
vi.mock('react-router', () => ({
    useParams: () => ({productId: 5}),
    Link: ({children}) => (<div>{children}</div>)
}))

describe('ProductDetail', () => {
    beforeEach(() => {
        render(<ProductDetail />)
    })

    test('show product name', () => {
        expect(screen.getAllByText('FALCIMA')).toHaveLength(2);
    })

    test('show price', () => {
        expect(screen.getByText('$99.00')).toBeInTheDocument();
    })

    test('render imgGallery with exact length', () => {
        expect(screen.getByTestId('image-gallery')).toHaveTextContent('3 imgs');
    })

    test('render AddToCart with exact productId', () => {
        expect(screen.getByText('AddToCart productId: 5')).toBeInTheDocument();
    })
})