import BannerImage from '../../../../assets/banner/banner-00.jpg'
import { Container } from './styles'

export function Banner() {
  return (
    <Container>
      <img src={BannerImage} alt="Imagem do Banner principal" />
    </Container>
  )
}
