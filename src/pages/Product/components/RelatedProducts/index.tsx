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
  return (
    <Container>
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
