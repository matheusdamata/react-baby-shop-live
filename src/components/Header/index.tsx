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
      const json = api.searchProducts(data.query)
      const response = await json
      console.log(response)
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
          <MenuNavLink to="/">Home</MenuNavLink>
          <MenuNavLink to="product/4">Pages</MenuNavLink>
          <MenuNavLink to="product/1">Shop</MenuNavLink>
          <MenuNavLink to="product/2">Blog</MenuNavLink>
          <MenuNavLink to="product/3">Elements</MenuNavLink>
        </MenuContainer>

        {/* <div className="fixed top-16 w-56 text-right">
          <Menu as="div" className="inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Home
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <Plus className="mr-2 h-5 w-5" aria-hidden="true" />
                        ) : (
                          <Plus className="mr-2 h-5 w-5" aria-hidden="true" />
                        )}
                        Edit
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <Plus className="mr-2 h-5 w-5" aria-hidden="true" />
                        ) : (
                          <Plus className="mr-2 h-5 w-5" aria-hidden="true" />
                        )}
                        Duplicate
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <Plus className="mr-2 h-5 w-5" aria-hidden="true" />
                        ) : (
                          <Plus className="mr-2 h-5 w-5" aria-hidden="true" />
                        )}
                        Archive
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <Plus className="mr-2 h-5 w-5" aria-hidden="true" />
                        ) : (
                          <Plus className="mr-2 h-5 w-5" aria-hidden="true" />
                        )}
                        Move
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <Plus
                            className="mr-2 h-5 w-5 text-violet-400"
                            aria-hidden="true"
                          />
                        ) : (
                          <Plus
                            className="mr-2 h-5 w-5 text-violet-400"
                            aria-hidden="true"
                          />
                        )}
                        Delete
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div> */}

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
            {wishlist.length > 0 ? <span>{wishlist.length}</span> : null}
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
