import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Product from './pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
    {/* <Route path="/*" element="Page not found" /> */}
  </Routes>
)

export default Rotas
