import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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

type ProductProps = {
  id: number
  description: string
  imageUrl: string
  name: string
  stock: number
  value: number
}

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

  const params = useParams()

  useEffect(() => {
    async function getProductItem() {
      try {
        const product = await api.getProduct(Number(params.id))
        const relatedProducts = await api.getRelatedProducts()

        setProduct(product)
        setRelatedProducts(relatedProducts)
      } catch (e) {
        console.error('Tente novamente mais tarde!', e)
      }
    }

    getProductItem()
  }, [params.id])

  const isDisabledButton = amountProduct <= 1

  return (
    <Container>
      <ProductContainer>
        <LeftSide>
          <img src={product?.imageUrl} alt="Imagem do produto" />
        </LeftSide>
        <RightSide>
          <h1>{product?.name}</h1>
          <strong>
            R${' '}
            {product?.value.toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            })}
          </strong>
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

            <ButtonAmountProduct>Add to cart</ButtonAmountProduct>
          </AmountProductContent>

          <WishListContent>
            <ButtonWishList>
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
        <h2>Realted Products</h2>
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
