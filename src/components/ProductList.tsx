import { useCart } from '../context/CartContext'
import type { Product } from '../types/index'

// Sample products data
const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
    description: 'High-quality wireless headphones with noise cancellation',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
    description: 'Feature-rich smartwatch with fitness tracking',
  },
  {
    id: 3,
    name: 'Laptop Stand',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
    description: 'Ergonomic laptop stand for better posture',
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop',
    description: 'RGB mechanical keyboard with premium switches',
  },
  {
    id: 5,
    name: 'Wireless Mouse',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop',
    description: 'Ergonomic wireless mouse with precision tracking',
  },
  {
    id: 6,
    name: 'USB-C Hub',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop',
    description: 'Multi-port USB-C hub for enhanced connectivity',
  },
]

export default function ProductList() {
  const { addToCart, getCartItemsCount } = useCart()

  return (
    <div className="px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
        <div className="text-sm text-gray-600">
          Cart Items: <span className="font-semibold">{getCartItemsCount()}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-blue-600">
                  ${product.price.toFixed(2)}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
