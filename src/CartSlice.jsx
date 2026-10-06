import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      const product = action.payload
      if (!state.items.some((item) => item.id === product.id)) {
        state.items.push({ ...product, quantity: 1 })
      }
    },
    incrementItem(state, action) {
      const item = state.items.find((entry) => entry.id === action.payload)
      if (item) item.quantity += 1
    },
    decrementItem(state, action) {
      const item = state.items.find((entry) => entry.id === action.payload)
      if (!item) return
      if (item.quantity > 1) item.quantity -= 1
      else state.items = state.items.filter((entry) => entry.id !== action.payload)
    },
    removeItem(state, action) {
      state.items = state.items.filter((entry) => entry.id !== action.payload)
    },
  },
})

export const { addItem, incrementItem, decrementItem, removeItem } = cartSlice.actions
export const selectCartItems = (state) => state.cart.items
export const selectCartCount = (state) => state.cart.items.reduce((total, item) => total + item.quantity, 0)
export const selectCartTotal = (state) => state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0)
export default cartSlice.reducer
