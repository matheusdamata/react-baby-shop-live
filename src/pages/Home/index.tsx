import { useEffect, useState } from 'react'

import {
  CategoryBorderButton,
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
import { useNavigate } from 'react-router-dom'
import { priceFormatter } from '../../utils/formatter'

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
  url: string
}

export function Home() {
  const [products, setProducts] = useState<ProductsType[]>([])
  const [photosPostInstagram, setPhotosPostInstagram] = useState<
    InstagramType[]
  >([])

  const navigate = useNavigate()

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

  function handleViewProduct(name: string, id: number) {
    const formatterRoute = name.replace(/ /g, '-').toLowerCase()
    navigate(`/product/${formatterRoute}`, { state: { id } })
  }

  return (
    <Container>
      <Banner />

      <CategoryButtonsContainer>
        <CategoryBorderButton variant="girl">
          <CategoryButtonContent>
            <img src={CategoryButtonGirl} alt="" />
            <CategoryButtonInfo>
              <strong>Modern Girl</strong>
              <span>
                From school to the seaside. Summer inspired collection.
              </span>
            </CategoryButtonInfo>
          </CategoryButtonContent>
        </CategoryBorderButton>

        <CategoryBorderButton variant="boy">
          <CategoryButtonContent>
            <img src={CategoryButtonBoy} alt="" />
            <CategoryButtonInfo>
              <strong>Urban Boy</strong>
              <span>
                Designed to follow your child though fun and adventures.
              </span>
            </CategoryButtonInfo>
          </CategoryButtonContent>
        </CategoryBorderButton>
      </CategoryButtonsContainer>

      <PopularProductsContainer>
        <h1>New Arrivals</h1>
        <p>Check out sweet summer collection inspired by the sea.</p>
      </PopularProductsContainer>

      <ProductsContainer>
        {products.map((product) => (
          <ProductContent
            key={product.id}
            onClick={() => handleViewProduct(product.name, product.id)}
          >
            <img src={product.imageUrl} alt="Imagem do produto" />
            <strong>{product.name}</strong>
            <span>{priceFormatter.format(product.value)}</span>
          </ProductContent>
        ))}
      </ProductsContainer>

      <SubscribeToNewsletter />

      <InstagramContainer>
        {photosPostInstagram.map((photo) => (
          <Instagram key={photo.id} image={photo.imageUrl} url={photo.url} />
        ))}
      </InstagramContainer>
    </Container>
  )
}
