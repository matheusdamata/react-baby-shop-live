import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  ButtonContent,
  ButtonsContainer,
  Container,
  HeaderContainer,
  HeaderTopBar,
  MenuLink,
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
  const { carts, wishlist } = useContext(Context)

  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const navigate = useNavigate()

  function handleClickLogo() {
    navigate('/')
  }

  async function handleSearchProducts(data: SearchFormInputs) {
    try {
      const formattedQuery = data.query.toLowerCase()

      const json = api.searchProducts(formattedQuery)
      const result = await json

      navigate(`/search/${formattedQuery}`, {
        state: result,
      })
    } catch (e) {
      console.error(e)
    } finally {
      reset()
    }
    return console.log(data.query)
  }

  function handleOpenWishlist() {
    navigate('/wishlist')
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
          <MenuLink to="/">
            Home
            <span></span>
          </MenuLink>
          <MenuLink to="/1">Pages</MenuLink>
          <MenuLink to="/2">Shop</MenuLink>
          <MenuLink to="/3">Blog</MenuLink>
          <MenuLink to="/4">Elements</MenuLink>
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
          <ButtonContent variant="wishlist" onClick={handleOpenWishlist}>
            <Heart size={25} weight="regular" />
            Wishlist
            {wishlist?.length > 0 ? <span>{wishlist.length}</span> : null}
          </ButtonContent>
          <ButtonContent variant="mybag">
            <Handbag size={25} weight="bold" />
            My bag
            {carts?.length > 0 ? <span>{carts.length}</span> : null}
          </ButtonContent>
        </ButtonsContainer>
      </HeaderContainer>
    </Container>
  )
}
