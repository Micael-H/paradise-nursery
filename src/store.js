import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice.jsx'
import { products } from './products.js'

const STORAGE_KEY = 'paradise-nursery-cart'

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (Array.isArray(saved)) {
      const items = saved.flatMap((entry) => {
        const product = products.find((candidate) => candidate.id === entry?.id)
        if (!product || !Number.isSafeInteger(entry.quantity) || entry.quantity < 1) return []
        return [{ ...product, quantity: Math.min(entry.quantity, 999) }]
      })
      return { cart: { items } }
    }
  } catch {
    // A damaged saved cart should not prevent the store from opening.
  }
  return undefined
}

export const store = configureStore({
  reducer: { cart: cartReducer },
  preloadedState: loadCart(),
})

store.subscribe(() => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState().cart.items))
  } catch {
    // Browsers may disable local storage; the current session still works.
  }
})
