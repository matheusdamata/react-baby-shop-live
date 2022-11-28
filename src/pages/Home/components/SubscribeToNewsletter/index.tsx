import { CaretRight } from 'phosphor-react'
import { Container, InputNewSletter, SideLeft, SideRight } from './styles'

import Banner from '../../../../assets/banner/newsletter-banner.jpg'

export function SubscribeToNewsletter() {
  return (
    <Container>
      <SideLeft>
        <h1>Newsletter</h1>

        <InputNewSletter type="text" placeholder="Your Name" />
        <InputNewSletter type="text" placeholder="Your email" />

        <button>
          Subscribe
          <span>
            <CaretRight size={24} weight="fill" />
          </span>
        </button>
      </SideLeft>
      <SideRight>
        <img src={Banner} alt="Banner do newsletter" />
      </SideRight>
    </Container>
  )
}
