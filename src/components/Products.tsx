import { useCart } from '../context/CartContext'
import type { Product } from '../types'

const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    description: 'High-quality wireless headphones with noise cancellation',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    description: 'Feature-rich smartwatch with fitness tracking',
  },
  {
    id: 3,
    name: 'Laptop Stand',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
    description: 'Ergonomic aluminum laptop stand',
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
    description: 'RGB mechanical keyboard with blue switches',
  },
  {
    id: 5,
    name: 'Wireless Mouse',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
    description: 'Ergonomic wireless mouse with precision tracking',
  },
  {
    id: 6,
    name: 'USB-C Hub',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400',
    description: 'Multi-port USB-C hub with HDMI and card reader',
  },
]

export default function Products() {
  const { addToCart, getTotalItems } = useCart()

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
        <div className="bg-indigo-600 text-white px-4 py-2 rounded-full">
          {getTotalItems()} items in cart
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-indigo-600">
                  ${product.price.toFixed(2)}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
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
