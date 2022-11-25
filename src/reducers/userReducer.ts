import produce from 'immer'

import { CartProps } from '../@types/global'

type UserType = {
  carts: CartProps[]
}

export const userReducer = (state: UserType, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return produce(state, (draft) => {
        draft.carts.push(action.payload)
      })
    }
    default:
      return state
  }
}
