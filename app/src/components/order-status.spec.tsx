// describe é interesante para descrever o teste - it deixa mais semantico
import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'
describe('Order Status', () => {
  it('shold display the right text when order status is pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    wrapper.debug()

    const statusTest = wrapper.getByText('Pendente')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusTest).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')
  })
  it('shold display the right text when order status is canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />)

    wrapper.debug()

    const statusTest = wrapper.getByText('Cancelado')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusTest).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')
  })
  it('shold display the right text when order status is delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />)

    wrapper.debug()

    const statusTest = wrapper.getByText('Em entrega')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusTest).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })
  it('shold display the right text when order status is processing', () => {
    const wrapper = render(<OrderStatus status="processing" />)

    wrapper.debug()

    const statusTest = wrapper.getByText('Em preparo')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusTest).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })
  it('shold display the right text when order status is delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />)

    wrapper.debug()

    const statusTest = wrapper.getByText('Entregue')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusTest).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })
})
