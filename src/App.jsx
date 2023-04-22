import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartPage } from './pages/ProductsPage.jsx'
import { Checkout } from './pages/Checkout.jsx'
import { CartProvider } from './context/cart.jsx'
import { ProductDetails } from './pages/ProductDetails.jsx'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path='/' element={<CartPage />} />
            <Route path='/product/:idProduct' element={<ProductDetails />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;