import AddToCart from './AddToCart.jsx'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CartContext } from '../../context/CartContext.jsx'

describe('AddToCart', () => {
    const renderAddToCart = (cart = []) => {
        const addToCart = vi.fn();
        render(
            <CartContext.Provider
                value={{
                    cart: cart,
                    addToCart: addToCart
                }}
            >
                <AddToCart
                    productId={1}
                />
            </CartContext.Provider>
        )

        return { addToCart }
    }

    test('show button', () => {
        renderAddToCart()

        expect(
            screen.getByRole('button', {name: 'Add to Cart'})
        ).toBeInTheDocument()
    })

    test('initial quantity is 1', () => {
        renderAddToCart()

        expect(
            screen.getByRole('textbox')
        ).toHaveValue('1')
    })

    test('use existing quantity from cart', () => {
        renderAddToCart(
            [
                {
                    id: 1,
                    quantity: 3
                }
            ]
        )

        expect(
            screen.getByRole('textbox')
        ).toHaveValue('3')
    })

    test('call addToCart when button is clicked', async () => {
        const { addToCart } = renderAddToCart();
        const user = userEvent.setup();

        await user.click(
            screen.getByRole('button', {name: 'Add to Cart'})
        )
        
        expect(addToCart).toHaveBeenCalledWith(1,1)
    })
})