import { Container } from './styled'

type CategoryButtonsProps = {
  icon: string
  title: string
  color: 'limon' | 'blue' | 'pink'
}

export function CategoryButtons({ icon, title, color }: CategoryButtonsProps) {
  return (
    <Container backgroundColor={color}>
      <img src={icon} alt="" />
      <h6>{title}</h6>
    </Container>
  )
}
