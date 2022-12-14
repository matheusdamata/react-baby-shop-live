import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { Product } from './pages/Product'
import { Search } from './pages/Search'
import { Wishlist } from './pages/Wishlist'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/search/:id" element={<Product />} /> */}
      </Route>
    </Routes>
  )
}
