import { Container } from './styled'

import { CategoryButtonsProps } from '../../../../helpers/homeCategoryButtons'

export function CategoryButtons({
  icon,
  title,
  color,
  border,
}: CategoryButtonsProps) {
  return (
    <Container backgroundColor={color} borderColor={border}>
      <img src={icon} alt="" />
      <h6>{title}</h6>
    </Container>
  )
}
