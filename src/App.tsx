import {
  // createBrowserRouter,
  // RouterProvider,
  BrowserRouter
  // Routes,
  // Route
} from 'react-router-dom'
import { GlobalCSS } from './styles'
import Header from './components/Header'

// import Home from './pages/Home'
// import Categories from './pages/Categories'
import Rotas from './routes'
import Footer from './components/Footer'

// const rotas = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/categories',
//     element: <Categories />
//   }
// ])

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <div className="container">
        <Header />
      </div>
      {/* <RouterProvider router={rotas} /> */}
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
