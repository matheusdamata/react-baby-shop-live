import { Heart } from 'phosphor-react'
import { Container, Content } from './styles'

export function SubscribeToNewsletter() {
  return (
    <Container>
      <Content>
        <h1>Subscribe to newsletter</h1>
        <input type="text" placeholder="Your email..." />
        <button>
          Subscribe
          <Heart size={24} weight="fill" />
        </button>
      </Content>
    </Container>
  )
}
