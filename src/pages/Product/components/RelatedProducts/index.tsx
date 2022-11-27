import { useNavigate } from 'react-router-dom'

import { Container } from './styles'

type RelatedProductType = {
  id: number
  description: string
  imageUrl: string
  name: string
  stock: number
  value: number
}

type RelatedProductProps = {
  relatedProduct: RelatedProductType
}

export function RelatedProducts({ relatedProduct }: RelatedProductProps) {
  const navigate = useNavigate()

  function handleRelatedProduct() {
    const formatterRoute = relatedProduct.name.replace(/ /g, '-').toLowerCase()
    navigate(`/product/${formatterRoute}`, { state: { id: relatedProduct.id } })
  }

  return (
    <Container onClick={handleRelatedProduct}>
      <img src={relatedProduct.imageUrl} alt="Imagem do produto" />
      <strong>{relatedProduct.name}</strong>
      <span>
        R${' '}
        {relatedProduct.value.toLocaleString('pt-br', {
          minimumFractionDigits: 2,
        })}
      </span>
    </Container>
  )
}
