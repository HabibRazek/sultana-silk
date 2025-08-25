import { create } from 'zustand'

// Product interface
export interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: string
  inStock: boolean
  featured: boolean
}

// Cart item interface
export interface CartItem {
  product: Product
  quantity: number
}

// Store interface
interface StoreState {
  // Cart state
  cart: CartItem[]
  cartOpen: boolean
  
  // UI state
  mobileMenuOpen: boolean
  
  // Cart actions
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  
  // UI actions
  toggleMobileMenu: () => void
  
  // Computed values
  cartTotal: () => number
  cartItemsCount: () => number
}

// Create the store
export const useStore = create<StoreState>((set, get) => ({
  // Initial state
  cart: [],
  cartOpen: false,
  mobileMenuOpen: false,
  
  // Cart actions
  addToCart: (product: Product, quantity = 1) => {
    set((state) => {
      const existingItem = state.cart.find(item => item.product.id === product.id)
      
      if (existingItem) {
        return {
          cart: state.cart.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        }
      } else {
        return {
          cart: [...state.cart, { product, quantity }]
        }
      }
    })
  },
  
  removeFromCart: (productId: string) => {
    set((state) => ({
      cart: state.cart.filter(item => item.product.id !== productId)
    }))
  },
  
  updateQuantity: (productId: string, quantity: number) => {
    if (quantity <= 0) {
      get().removeFromCart(productId)
      return
    }
    
    set((state) => ({
      cart: state.cart.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    }))
  },
  
  clearCart: () => {
    set({ cart: [] })
  },
  
  toggleCart: () => {
    set((state) => ({ cartOpen: !state.cartOpen }))
  },
  
  // UI actions
  toggleMobileMenu: () => {
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen }))
  },
  
  // Computed values
  cartTotal: () => {
    const { cart } = get()
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0)
  },
  
  cartItemsCount: () => {
    const { cart } = get()
    return cart.reduce((total, item) => total + item.quantity, 0)
  }
}))
