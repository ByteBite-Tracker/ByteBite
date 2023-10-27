import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Footer } from '@/components/navigation/footer'

describe('Footer', () => {
  it('should render a copyright', () => {
    // Arrange
    const copyrightText = '© 2023 ByteBite Tracker. No rights reserved'
    
    // Act
    render(<Footer />)
    const copyright = screen.getByRole('paragraph');
    
    // Assert
    expect(copyright).toHaveTextContent(copyrightText);
  })
})
