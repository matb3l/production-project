import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'
import '@testing-library/jest-dom'

describe('Testing Button', () => {
  it('Отрисовка тест', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByTestId('button')).toBeInTheDocument()
  })
})
