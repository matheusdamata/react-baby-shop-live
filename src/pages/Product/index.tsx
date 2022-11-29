import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Check, Minus, Plus } from 'phosphor-react'

import api from '../../config/api'

import * as Tabs from '@radix-ui/react-tabs'

import {
  AmountProductContent,
  ButtonAmountProduct,
  ButtonWishList,
  Container,
  LeftSide,
  ProductContainer,
  QuantityContainer,
  QuantityContent,
  RelatedProductsContainer,
  RelatedProductsContent,
  RightSide,
  TabsContent,
  TabsProductContainer,
  TabsRoot,
  TabsTrigger,
  WishListContent,
} from './styles'
import { RelatedProducts } from './components/RelatedProducts'
import { Context } from '../../contexts/UserContext'
import { ProductProps } from '../../@types/global-types'
import { useScrollToTop } from '../../hooks/useScrollToTop'
import { priceFormatter } from '../../utils/formatter'

type RelatedProductsProps = {
  id: number
  description: string
  imageUrl: string
  name: string
  stock: number
  value: number
}

export function Product() {
  const [product, setProduct] = useState<ProductProps>()
  const [relatedProducts, setRelatedProducts] = useState<
    RelatedProductsProps[]
  >([])
  const [amountProduct, setAmountProduct] = useState(1)

  const { dispatch } = useContext(Context)

  const location = useLocation()

  useEffect(() => {
    async function getProductItem() {
      try {
        const json = await api.getProduct(parseInt(location.state.id))
        const relatedProducts = await api.getRelatedProducts()

        setProduct(() => json)
        setRelatedProducts(() => relatedProducts)
      } catch (e) {
        console.error('Tente novamente mais tarde!', e)
      }
    }

    getProductItem()
  }, [location.state.id])

  function handleAddToCart(product: ProductProps) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    })
  }

  function handleAddWishlist(product: ProductProps) {
    dispatch({
      type: 'ADD_TO_WISHLIST',
      payload: product,
    })
  }

  const isDisabledButton = amountProduct <= 1

  useScrollToTop()

  if (!product) {
    return null
  }

  return (
    <Container>
      <ProductContainer>
        <LeftSide>
          <img src={product?.imageUrl} alt="Imagem do produto" />
        </LeftSide>
        <RightSide>
          <h1>{product?.name}</h1>
          <strong>{priceFormatter.format(product!?.value)}</strong>
          <p>{product?.description}</p>

          <AmountProductContent>
            <QuantityContainer>
              <span>Quantity</span>
              <QuantityContent>
                <button
                  onClick={() => setAmountProduct((state) => state - 1)}
                  disabled={isDisabledButton}
                >
                  <Minus size={16} weight="fill" />
                </button>
                {amountProduct}
                <button onClick={() => setAmountProduct((state) => state + 1)}>
                  <Plus size={16} weight="fill" />
                </button>
              </QuantityContent>
            </QuantityContainer>

            <ButtonAmountProduct onClick={() => handleAddToCart(product)}>
              Add to cart
            </ButtonAmountProduct>
          </AmountProductContent>

          <WishListContent>
            <ButtonWishList onClick={() => handleAddWishlist(product)}>
              <Check size={18} weight="bold" />
              BROWSE WISHLIST
            </ButtonWishList>
          </WishListContent>
        </RightSide>
      </ProductContainer>

      <TabsProductContainer>
        <TabsRoot defaultValue="description">
          <Tabs.List>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="add-information">
              Additional Information
            </TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </Tabs.List>
          <TabsContent value="description">
            <strong>Description</strong>
            <p>
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
              tempus, tellus eget condimentum rhoncus, sem quam semper libero,
              sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit
              vel, luctus pulvinar
            </p>
          </TabsContent>
          <TabsContent value="add-information">
            <p>Additional Information</p>
          </TabsContent>
          <TabsContent value="reviews">
            <p>Reviews</p>
          </TabsContent>
        </TabsRoot>
      </TabsProductContainer>

      <RelatedProductsContainer>
        <h2>Related Products</h2>
        <RelatedProductsContent>
          {relatedProducts.map((relatedProduct) => (
            <RelatedProducts
              key={relatedProduct.id}
              relatedProduct={relatedProduct}
            />
          ))}
        </RelatedProductsContent>
      </RelatedProductsContainer>
    </Container>
  )
}
