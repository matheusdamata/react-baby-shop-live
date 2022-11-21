import {
  ButtonContent,
  ButtonsContainer,
  Container,
  HeaderContainer,
  HeaderTopBar,
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
          <button>Home</button>
          <button>Pages</button>
          <button>Shop</button>
          <button>Blog</button>
          <button>Elements</button>
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
