import { ButtonLearnMore, Container, RightContent, RightSide } from './styles'

import BannerImage from '../../../../assets/banner/banner-00.jpg'
import SaleImage from '../../../../assets/banner/50-sale.png'

import { CaretRight } from 'phosphor-react'

export function Banner() {
  return (
    <Container>
      <img src={BannerImage} alt="Imagem do Banner principal" />
      <RightSide>
        <img src={SaleImage} alt="50% de desconto" />
        <RightContent>
          <h1>
            Have fun <span>.</span>
          </h1>
          <p>Surprise your little ones with adorable clothes & funny toys.</p>

          <ButtonLearnMore>
            Learn More
            <span>
              <CaretRight size={24} weight="fill" />
            </span>
          </ButtonLearnMore>
        </RightContent>
      </RightSide>
    </Container>
  )
}
