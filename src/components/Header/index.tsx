import {
  ButtonContent,
  ButtonsContainer,
  Container,
  HeaderContainer,
  HeaderTopBar,
  MenuButtonContent,
  MenuContainer,
  SearchContainer,
} from './style'
import { Heart, MagnifyingGlass, Handbag } from 'phosphor-react'

import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <HeaderTopBar>Compre acima de R$250,00 e ganhe frete grátis</HeaderTopBar>
      <HeaderContainer>
        <img src={Logo} alt="Imagem da logo do site" />
        <MenuContainer>
          <MenuButtonContent isMenuActive={true}>
            Home
            <hr />
          </MenuButtonContent>
          <MenuButtonContent isMenuActive={false}>
            Pages
            <hr />
          </MenuButtonContent>
          <MenuButtonContent isMenuActive={false}>
            Shop
            <hr />
          </MenuButtonContent>
          <MenuButtonContent isMenuActive={false}>
            Blog
            <hr />
          </MenuButtonContent>
          <MenuButtonContent isMenuActive={false}>
            Elements
            <hr />
          </MenuButtonContent>
        </MenuContainer>
        <SearchContainer>
          <input type="text" placeholder="Search product" />
          <button>
            <MagnifyingGlass size={20} weight="bold" />
          </button>
        </SearchContainer>
        <ButtonsContainer>
          <ButtonContent variant="wishlist">
            <Heart size={25} weight="regular" />
            Wishlist
          </ButtonContent>
          <ButtonContent variant="mybag">
            <Handbag size={25} weight="bold" />
            My bag
          </ButtonContent>
        </ButtonsContainer>
      </HeaderContainer>
    </Container>
  )
}
