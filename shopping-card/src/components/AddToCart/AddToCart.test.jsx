import AddToCart from './AddToCart.jsx'
import { render, screen } from '@testing-library/react'
import { CartContext } from '../../context/CartContext.jsx'

describe('AddToCart', () => {
    beforeEach(() => {
        render(
            <CartContext.Provider
                value={{
                    cart: [],
                    addToCart: vi.fn()
                }}
            >
                <AddToCart>
                    productId={1}
                </AddToCart>
            </CartContext.Provider>
        )
    })

    test('show button', () => {
        expect(
            screen.getByRole('button', {name: 'Add to Cart'})
        ).toBeInTheDocument()
    })
})