import { Provider } from 'react-redux'
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
import { store } from './store'
import Cart from './components/Cart'

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
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <div className="container">
          <Header />
        </div>
        {/* <RouterProvider router={rotas} /> */}
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
