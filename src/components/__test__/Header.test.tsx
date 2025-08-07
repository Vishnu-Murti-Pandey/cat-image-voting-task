// Header.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../../components/Header'
import { ThemeContext } from '../../context/ThemeContext'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

describe('Header Theme Toggle', () => {
  it('should render light theme by default and toggle to dark', () => {
    const toggleTheme = jest.fn()

    render(
      <MemoryRouter>
        <ThemeContext.Provider value={{ theme: 'light', toggleTheme }}>
          <Header onRefresh={() => {}} />
        </ThemeContext.Provider>
      </MemoryRouter>
    )

    // Check if sun icon (for light theme) is visible
    expect(screen.getByLabelText('Toggle Theme')).toBeInTheDocument()

    // Click the toggle button
    fireEvent.click(screen.getByLabelText('Toggle Theme'))

    // Expect the toggleTheme function to have been called
    expect(toggleTheme).toHaveBeenCalled()
  })

  it('should show light theme toggle if theme is dark', () => {
    const toggleTheme = jest.fn()

    render(
      <MemoryRouter>
        <ThemeContext.Provider value={{ theme: 'dark', toggleTheme }}>
          <Header onRefresh={() => {}} />
        </ThemeContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getByLabelText('Toggle Theme')).toBeInTheDocument()

    fireEvent.click(screen.getByLabelText('Toggle Theme'))

    expect(toggleTheme).toHaveBeenCalled()
  })
})
