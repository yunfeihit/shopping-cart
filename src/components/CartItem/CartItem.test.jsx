import CartItem from './CartItem.jsx'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CartProvider from '../../context/CartContext.jsx'

//define render function
const renderCartItem = (
    productId = 4,
    productQuantity = 3
) => {
    render(
        <CartProvider>
            <CartItem 
                productId={productId}
                productQuantity={productQuantity}
            />
        </CartProvider>
    )
}

describe('CartItem', () => {
    beforeEach(() => {
        renderCartItem();
    })

    test('show price', () => {
        expect(screen.getByText('$199.00')).toBeInTheDocument();
    })

    test('show prodcut name', () => {
        expect(screen.getByText('Apolonia')).toBeInTheDocument();
    })

    test('show product quantity from given', () => {
        expect(screen.getByRole('textbox')).toHaveValue('3');
    })

    test('subtotal is correct', () => {
        const sutotalOfApolonia = 199 * 3;
        expect(screen.getByText(`$${sutotalOfApolonia}.00`)).toBeInTheDocument();
    })

    test('remove button shows up', () => {
        expect(screen.getByRole('button', {name: 'Remove'})).toBeInTheDocument();
    })
})