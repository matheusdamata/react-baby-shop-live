import React, { createContext, ReactNode, useReducer } from 'react'
import { CartProps } from '../@types/global'
import { userReducer } from '../reducers/userReducer'

type UserContextType = {
  carts: CartProps[]
  dispatch: React.Dispatch<any>
}

type ContextProviderType = {
  children: ReactNode
}

export const Context = createContext({} as UserContextType)

export const ContextProvider = ({ children }: ContextProviderType) => {
  const [userState, dispatch] = useReducer(userReducer, {
    carts: [],
  })

  const { carts } = userState

  return (
    <Context.Provider
      value={{
        carts,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  )
}
