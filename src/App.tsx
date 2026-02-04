// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext'
import './index.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex space-x-8">
                  <Link 
                    to="/" 
                    className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600 font-medium"
                  >
                    Products
                  </Link>
                  <Link 
                    to="/cart" 
                    className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600 font-medium"
                  >
                    Cart
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
