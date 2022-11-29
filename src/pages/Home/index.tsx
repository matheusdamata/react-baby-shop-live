import { useEffect, useState } from 'react'

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

import CategoryIconBabies from '../../assets/category/babies.png'
import CategoryIconOutfits from '../../assets/category/outfits.png'
import CategoryIconKids from '../../assets/category/kids.png'
import CategoryIconNurturing from '../../assets/category/nurturing.png'
import CategoryIconGirls from '../../assets/category/girls.png'
import CategoryIconChildCare from '../../assets/category/child-care.png'

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
        <CategoryButtons
          icon={CategoryIconBabies}
          title="Babies"
          color="limon"
        />
        <CategoryButtons
          icon={CategoryIconOutfits}
          title="Outfits"
          color="blue"
        />
        <CategoryButtons icon={CategoryIconKids} title="Kids" color="pink" />
        <CategoryButtons
          icon={CategoryIconNurturing}
          title="Nurturing"
          color="limon"
        />
        <CategoryButtons icon={CategoryIconGirls} title="Girls" color="blue" />
        <CategoryButtons
          icon={CategoryIconChildCare}
          title="Child Care"
          color="pink"
        />
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
