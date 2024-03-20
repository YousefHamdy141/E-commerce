import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header'
import { Products } from './Components/Products'
import { Cart } from './Components/Cart'
import { Footer } from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Products />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
