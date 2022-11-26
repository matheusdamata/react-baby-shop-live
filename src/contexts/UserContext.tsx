import React, { createContext, ReactNode, useReducer } from 'react'
import { CartProps, WishlistProps } from '../@types/global-types'
import { userReducer } from '../reducers/userReducer'

type UserContextType = {
  carts: CartProps[]
  wishlist: WishlistProps[]
  dispatch: React.Dispatch<any>
}

type ContextProviderType = {
  children: ReactNode
}

export const Context = createContext({} as UserContextType)

export const ContextProvider = ({ children }: ContextProviderType) => {
  const [userState, dispatch] = useReducer(userReducer, {
    carts: [],
    wishlist: [],
  })

  const { carts, wishlist } = userState

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
