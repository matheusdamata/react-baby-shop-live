import { useEffect, useState } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import {
  CategoryButtonsContainer,
  Container,
  InstagramContainer,
  PopularProductsContainer,
  ProductContent,
  ProductsContainer,
} from './styles'
import { Banner } from './components/Banner'

import api from '../../config/api'
import { SubscribeToNewsletter } from './components/SubscribeToNewsletter'
import { Instagram } from './components/Instagram'
import { useNavigate } from 'react-router-dom'
import { priceFormatter } from '../../utils/formatter'
import { CategoryButtons } from './components/CategoryButtons'

import { ProductProps } from '../../@types/global-types'
import { homeCategoryButtons } from '../../helpers/homeCategoryButtons'

type InstagramType = {
  id: number
  imageUrl: string
  url: string
}

export function Home() {
  const [products, setProducts] = useState<ProductProps[]>([])
  const [photosPostInstagram, setPhotosPostInstagram] = useState<
    InstagramType[]
  >([])

  const navigate = useNavigate()

  useEffect(() => {
    Aos.init({
      duration: 500,
    })

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

      <CategoryButtonsContainer data-aos="fade-up">
        {homeCategoryButtons.map((button) => (
          <CategoryButtons
            key={button.title}
            icon={button.icon}
            title={button.title}
            color={button.color}
            border={button.border}
          />
        ))}
      </CategoryButtonsContainer>

      <PopularProductsContainer data-aos="fade-up">
        <h1>New Arrivals</h1>
        <p>Check out sweet summer collection inspired by the sea.</p>
      </PopularProductsContainer>

      <ProductsContainer data-aos="fade-up">
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

      <InstagramContainer data-aos="fade-up">
        {photosPostInstagram.map((photo) => (
          <Instagram key={photo.id} image={photo.imageUrl} url={photo.url} />
        ))}
      </InstagramContainer>
    </Container>
  )
}
