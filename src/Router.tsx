import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Home } from './pages/Home'
import { Product } from './pages/Product'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        {/* <Route path="/search/:id" element={<Product />} /> */}
      </Route>
    </Routes>
  )
}
