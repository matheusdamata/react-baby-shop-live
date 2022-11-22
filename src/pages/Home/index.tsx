import { useEffect, useState } from 'react'

import {
  CategoryButtonContent,
  CategoryButtonInfo,
  CategoryButtonsContainer,
  Container,
  InstagramContainer,
  PopularProductsContainer,
  ProductContent,
  ProductsContainer,
} from './styles'
import { Banner } from './components/Banner'

import CategoryButtonBoy from '../../assets/category-buttons/boy.png'
import CategoryButtonGirl from '../../assets/category-buttons/girl.png'
import api from '../../config/api'
import { SubscribeToNewsletter } from './components/SubscribeToNewsletter'
import { Instagram } from './components/Instagram'

type ProductsType = {
  id: number
  imageUrl: string
  name: string
  description: string
  value: number
  stock: number
}

type InstagramType = {
  id: number
  imageUrl: string
}

export function Home() {
  const [products, setProducts] = useState<ProductsType[]>([])
  const [photosPostInstagram, setPhotosPostInstagram] = useState<
    InstagramType[]
  >([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const jsonProducts = await api.getProducts()
        const jsonInstagram = await api.getPhotosPostInstagram()

        setProducts(jsonProducts)
        setPhotosPostInstagram(jsonInstagram)
      } catch (e) {
        console.log('Tente novamente mais tarde!', e)
      }
    }

    fetchProducts()
  }, [])

  return (
    <Container>
      <Banner />

      <CategoryButtonsContainer>
        <CategoryButtonContent variant="girl">
          <img src={CategoryButtonGirl} alt="" />
          <CategoryButtonInfo>
            <strong>Modern Girl</strong>
            <span>From school to the seaside. Summer inspired collection.</span>
          </CategoryButtonInfo>
        </CategoryButtonContent>

        <CategoryButtonContent variant="boy">
          <img src={CategoryButtonBoy} alt="" />
          <CategoryButtonInfo>
            <strong>Urban Boy</strong>
            <span>
              Designed to follow your child though fun and adventures.
            </span>
          </CategoryButtonInfo>
        </CategoryButtonContent>
      </CategoryButtonsContainer>

      <PopularProductsContainer>
        <h1>Popular Products</h1>
        <p>
          Made with care for your little ones, our products are perfect for
          every occasion. Check it out.
        </p>
      </PopularProductsContainer>

      <ProductsContainer>
        {products.map((product) => (
          <ProductContent key={product.id}>
            <img src={product.imageUrl} alt="Imagem do produto" />
            <strong>{product.name}</strong>
            <span>
              R${' '}
              {product.value.toLocaleString('pt-br', {
                minimumFractionDigits: 2,
              })}
            </span>
          </ProductContent>
        ))}
      </ProductsContainer>

      <SubscribeToNewsletter />

      <InstagramContainer>
        {photosPostInstagram.map((photo) => (
          <Instagram key={photo.id} image={photo.imageUrl} />
        ))}
      </InstagramContainer>
    </Container>
  )
}
