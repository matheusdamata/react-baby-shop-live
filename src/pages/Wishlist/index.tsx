import { X } from 'phosphor-react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductProps } from '../../@types/global-types'
import { Context } from '../../contexts/UserContext'
import { priceFormatter } from '../../utils/formatter'
import {
  ButtonAmountProduct,
  ButtonRemove,
  Container,
  Content,
  SpanText,
  WishContainer,
  WishView,
} from './styles'

export function Wishlist() {
  const { wishlist, dispatch } = useContext(Context)

  const navigate = useNavigate()

  function handleAddToCart(wish: ProductProps) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: wish,
    })
  }

  function handleRemoveProduct(id: number) {
    dispatch({
      type: 'REMOVE_TO_WISHLIST',
      payload: id,
    })
  }

  function handleViewProduct(name: string, id: number) {
    const formatterRoute = name.replace(/ /g, '-').toLowerCase()
    console.log(formatterRoute)
    navigate(`/product/${formatterRoute}`, { state: { id } })
  }

  return (
    <Container>
      <h1>Wishlist</h1>

      <Content>
        {wishlist.map((wish) => (
          <WishContainer key={wish.id}>
            <ButtonRemove onClick={() => handleRemoveProduct(wish.id)}>
              <X size={18} weight="fill" />
            </ButtonRemove>
            <img
              src={wish.imageUrl}
              alt="Imagem do produto adicionado aos favoritos"
            />
            <WishView onClick={() => handleViewProduct(wish.name, wish.id)}>
              {wish.name}
            </WishView>

            <span>{priceFormatter.format(wish.value)}</span>

            {wish.stock !== 0 ? (
              <SpanText variant="instock">Product in stock</SpanText>
            ) : (
              <SpanText variant="ofstock">Product out of stock</SpanText>
            )}

            <ButtonAmountProduct
              onClick={() => handleAddToCart(wish)}
              disabled={!wish.stock}
            >
              Add to cart
            </ButtonAmountProduct>
          </WishContainer>
        ))}
      </Content>
    </Container>
  )
}
