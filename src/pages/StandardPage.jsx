/* eslint-disable react/prop-types */

import Header from '../components/Header'
import Footer from '../components/Footer'
import { FavoritesListProvider } from '../context/FavoritesListContext'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { CartSideBar } from '../components/CartSideBar'


export const StandardPage = ({ children }) => {

  const { isCartActive } = useContext(CartContext)

  return (
    <>
      <Header />
      <FavoritesListProvider>
        {isCartActive && <CartSideBar />}
        <main>
          {children}
        </main>
      </FavoritesListProvider>
      <Footer />
    </>
  )
}
