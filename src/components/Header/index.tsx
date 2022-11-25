import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  ButtonContent,
  ButtonsContainer,
  Container,
  HeaderContainer,
  HeaderTopBar,
  MenuNavLink,
  MenuContainer,
  SearchContainer,
} from './style'
import { Heart, MagnifyingGlass, Handbag } from 'phosphor-react'

import Logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import api from '../../config/api'
import { useContext } from 'react'
import { Context } from '../../contexts/UserContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Header() {
  const { carts } = useContext(Context)

  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const navigate = useNavigate()

  function handleClickLogo() {
    navigate('/')
  }

  async function handleSearchProducts(data: SearchFormInputs) {
    try {
      const json = api.searchProducts(data.query)
      const response = await json
    } catch (e) {
      console.error(e)
    } finally {
      reset()
    }
    return console.log(data.query)
  }

  return (
    <Container>
      <HeaderTopBar>Compre acima de R$250,00 e ganhe frete grátis</HeaderTopBar>
      <HeaderContainer>
        <img
          src={Logo}
          alt="Imagem da logo do site"
          onClick={handleClickLogo}
        />
        <MenuContainer>
          <MenuNavLink to="/">Home</MenuNavLink>
          <MenuNavLink to="product/4">Pages</MenuNavLink>
          <MenuNavLink to="product/1">Shop</MenuNavLink>
          <MenuNavLink to="product/2">Blog</MenuNavLink>
          <MenuNavLink to="product/3">Elements</MenuNavLink>
        </MenuContainer>
        <SearchContainer onSubmit={handleSubmit(handleSearchProducts)}>
          <input
            type="text"
            placeholder="Search product"
            {...register('query')}
          />
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
            {carts.length > 0 ? <span>{carts.length}</span> : null}
          </ButtonContent>
        </ButtonsContainer>
      </HeaderContainer>
    </Container>
  )
}
