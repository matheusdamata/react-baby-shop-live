import { useContext, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { Context } from '../../contexts/UserContext'
import { priceFormatter } from '../../utils/formatter'

import { X } from 'phosphor-react'
import {
  ButtonRemove,
  Container,
  CartContent,
  SpanText,
  CartContainer,
  CartView,
  FooterCart,
  PriceCartContent,
  CupomCartContent,
  TrBase,
  EmptyCart,
  ButtonStartCheckout,
} from './styles'
import Aos from 'aos'

export function Cart() {
  const [couponInput, setCouponInput] = useState('')

  const { carts, dispatch } = useContext(Context)

  useEffect(() => {
    Aos.init({
      duration: 500,
    })
  }, [])

  const navigate = useNavigate()

  function handleRemoveProduct(id: number) {
    dispatch({
      type: 'REMOVE_TO_CARTLIST',
      payload: id,
    })
  }

  function handleViewProduct(name: string, id: number) {
    const formatterRoute = name.replace(/ /g, '-').toLowerCase()
    console.log(formatterRoute)
    navigate(`/product/${formatterRoute}`, { state: { id } })
  }

  function handleSubmitCoupon(coupon: string) {
    if (coupon === 'blackfriday') {
      console.log('Desconto aplicado')
    }
  }

  const subTotalCart = carts.reduce((sum, cart) => {
    return sum + cart.value
  }, 0)

  return (
    <Container>
      <h1>Cart</h1>

      <CartContent>
        {carts?.length > 0 ? (
          <>
            {carts?.map((cart) => (
              <CartContainer key={cart.id} data-aos="fade-up">
                <ButtonRemove onClick={() => handleRemoveProduct(cart.id)}>
                  <X size={18} weight="fill" />
                </ButtonRemove>
                <img src={cart.imageUrl} alt="Imagem do produto" />
                <CartView onClick={() => handleViewProduct(cart.name, cart.id)}>
                  {cart.name}
                </CartView>

                <span>{priceFormatter.format(cart.value)}</span>

                {cart.stock !== 0 ? (
                  <SpanText variant="instock">Product in stock</SpanText>
                ) : (
                  <SpanText variant="ofstock">Product out of stock</SpanText>
                )}
              </CartContainer>
            ))}
          </>
        ) : (
          <EmptyCart>
            <strong>Your cart is currently empty.</strong>
          </EmptyCart>
        )}
      </CartContent>

      <hr />

      <FooterCart>
        <CupomCartContent>
          <input
            type="text"
            placeholder="Coupon code"
            onChange={(event) => setCouponInput(event.target.value)}
          />
          <button onClick={() => handleSubmitCoupon(couponInput)}>
            Apply coupon
          </button>
        </CupomCartContent>
        <h2>Cart Totals</h2>
        <PriceCartContent>
          <tbody>
            <TrBase>
              <th>Subtotal</th>
              <td>{priceFormatter.format(subTotalCart)}</td>
            </TrBase>
            <TrBase>
              <th>Shipping</th>
              <td>Free shipping</td>
            </TrBase>
            <TrBase>
              <th>Total</th>
              <td>{priceFormatter.format(subTotalCart)}</td>
            </TrBase>
          </tbody>
        </PriceCartContent>
        <ButtonStartCheckout>Proceed to checkout</ButtonStartCheckout>
      </FooterCart>
    </Container>
  )
}
