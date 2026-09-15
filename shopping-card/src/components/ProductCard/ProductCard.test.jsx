import ProductCard from './ProductCard.jsx'
import { render, screen } from '@testing-library/react'

describe('ProductCard', () => {
    test('show name and price', () => {
        render(<ProductCard 
            img = 'imgUrl'
            name = 'testName'
            price = '$99'
        />)

        expect(screen.getByText('testName')).toBeInTheDocument();
    })
})