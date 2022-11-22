import { Container, Content, IconContainer, IconContent } from './styles'

import Logo from '../../assets/logo.svg'
import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'

export function Footer() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="" />
        <p>
          Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
          expetendis in mei. Mei an pericula.
        </p>
        <IconContainer>
          <IconContent variant="instagram">
            <InstagramLogo size={18} weight="bold" />
          </IconContent>
          <IconContent variant="twitter">
            <TwitterLogo size={18} weight="fill" />
          </IconContent>
          <IconContent variant="facebook">
            <FacebookLogo size={18} weight="bold" />
          </IconContent>
        </IconContainer>
      </Content>

      <Content>
        <strong>Useful links</strong>
        <a href="">How it works</a>
        <a href="">About</a>
        <a href="">Babysitters</a>
        <a href="">Contact us</a>
      </Content>

      <Content>
        <strong>My Account</strong>
        <a href="">Track my order</a>
        <a href="">Terms of use</a>
        <a href="">Wishlist</a>
        <a href="">Submit Your feedback</a>
      </Content>

      <Content>
        <strong>Customer Service</strong>
        <a href="">Help & Contact Us</a>
        <a href="">Returns & Refunds</a>
        <a href="">Online Stores</a>
        <a href="">Terms & Condition</a>
      </Content>
    </Container>
  )
}
