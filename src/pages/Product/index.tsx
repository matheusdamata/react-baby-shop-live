import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../config/api'
import { Container } from './styles'

type ProductProps = {
  id: number
  description: string
  imageUrl: string
  name: string
  stock: number
  value: number
}

export function Product() {
  const [product, setProduct] = useState<ProductProps>()

  const params = useParams()

  useEffect(() => {
    async function getProductItem() {
      try {
        const product = await api.getProduct(Number(params.id))
        setProduct(product)
      } catch (e) {
        console.error('Tente novamente mais tarde!', e)
      }
    }

    getProductItem()
  }, [params.id])

  return (
    <Container>
      <h1>{product?.name}</h1>
    </Container>
  )
}
