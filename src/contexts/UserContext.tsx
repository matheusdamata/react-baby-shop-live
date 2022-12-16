import React, { createContext, ReactNode, useEffect, useReducer } from 'react'
import { CartProps, ProductProps } from '../@types/global-types'
import { userReducer } from '../reducers/userReducer'

type UserContextType = {
  carts: CartProps[]
  wishlist: ProductProps[]
  dispatch: React.Dispatch<any>
}

type ContextProviderType = {
  children: ReactNode
}

export const Context = createContext({} as UserContextType)

export const ContextProvider = ({ children }: ContextProviderType) => {
  const [userState, dispatch] = useReducer(
    userReducer,
    {
      carts: [],
      wishlist: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@baby-shop:baby-shop-state-1.0.5',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return {
        carts: [],
        wishlist: [],
      }
    },
  )

  const { carts, wishlist } = userState

  useEffect(() => {
    const stateJSON = JSON.stringify(userState)

    localStorage.setItem('@baby-shop:baby-shop-state-1.0.5', stateJSON)
  }, [userState])

  return (
    <Context.Provider
      value={{
        carts,
        wishlist,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  )
}
