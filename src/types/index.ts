export interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

export interface CartItem extends Product {
  quantity: number
}

export interface CartContextType {
  cartItems: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartItemsCount: () => number
}
