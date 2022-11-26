export type UserProps = {
  name: string
}

export type ProductProps = {
  id: number
  description: string
  imageUrl: string
  name: string
  stock: number
  value: number
}

export type CartProps = {
  id: number
  imageUrl: string
  name: string
  value: number
  amount: number
}

export type WishlistProps = {
  id: number
  description: string
  imageUrl: string
  name: string
  stock: number
  value: number
}
