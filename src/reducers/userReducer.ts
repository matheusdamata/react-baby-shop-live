import produce from 'immer'

import { CartProps, ProductProps } from '../@types/global-types'

type UserType = {
  carts: CartProps[]
  wishlist: ProductProps[]
}

export const userReducer = (state: UserType, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return produce(state, (draft) => {
        draft.carts?.push(action.payload)
      })
    }
    case 'ADD_TO_WISHLIST': {
      const currentProductIndex = state.wishlist?.findIndex((product) => {
        return product.id === action.payload.id
      })

      if (currentProductIndex < 0) {
        return produce(state, (draft) => {
          draft.wishlist?.push(action.payload)
        })
      }
      return state
    }
    case 'REMOVE_TO_WISHLIST': {
      return {
        ...state,
        wishlist: state.wishlist?.filter(
          (product) => product.id !== action.payload,
        ),
      }
    }
    case 'REMOVE_TO_CARTLIST': {
      return {
        ...state,
        carts: state.carts?.filter((cart) => cart.id !== action.payload),
      }
    }
    default:
      return state
  }
}
