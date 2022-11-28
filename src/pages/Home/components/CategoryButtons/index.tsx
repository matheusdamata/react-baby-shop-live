import { Container } from './styled'

type CategoryButtonsProps = {
  icon: string
  title: string
  color?: string
}

export function CategoryButtons({ icon, title, color }: CategoryButtonsProps) {
  return (
    <Container>
      <img src={icon} alt="" />
      <h6>{title}</h6>
    </Container>
  )
}
