/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Outlet } from 'react-router-dom';

import Header from '../components/Header'
import Footer from '../components/Footer'
import { FavoritesListProvider } from '../context/FavoritesListContext'
import { CartSideBar } from '../components/CartSideBar'

export const StandardPage = () => {

  const { isCartActive } = useContext(CartContext)

  return (
    <>
      <Header />
      <FavoritesListProvider>
        {isCartActive && <CartSideBar />}
        <main>
        <Outlet />
        </main>
      </FavoritesListProvider>
      <Footer />
    </>
  )
}
