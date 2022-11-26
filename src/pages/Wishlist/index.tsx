import { X } from 'phosphor-react'
import { useContext } from 'react'
import { ProductProps } from '../../@types/global-types'
import { Context } from '../../contexts/UserContext'
import {
  ButtonAmountProduct,
  ButtonRemove,
  Container,
  Content,
  SpanText,
  WishContainer,
} from './styles'

export function Wishlist() {
  const { wishlist, dispatch } = useContext(Context)

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
            <a href="/">{wish.name}</a>

            <span>
              R${' '}
              {wish.value.toLocaleString('pt-br', {
                minimumFractionDigits: 2,
              })}
            </span>

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
