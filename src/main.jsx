import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { BooksListProvider } from './context/BooksListContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BooksListProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </BooksListProvider>
  </React.StrictMode>,
)
