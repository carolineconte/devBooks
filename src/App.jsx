import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import Favoritos from './pages/Favoritos'
import { ProductDetail } from './pages/ProductDetail'
import { NotFound } from './pages/NotFound'
import { StandardPage } from './pages/StandardPage'
import { ThanksPage } from './pages/ThanksPage'
import { Categories } from './pages/Category'
import { TrendPage } from './pages/TrendPage'
import { AcessForm } from './pages/AcessForm'
import { Checkout } from './pages/Checkout'
import { SearchPage } from './pages/SearchPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StandardPage />} >
          <Route index element={<Home />} />
          <Route path='myfavorites' element={<Favoritos />} />
          <Route path='/trendingbooks' element={<TrendPage />} />
          <Route path='/chekout' element={<Checkout />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/livros/:id' element={<ProductDetail />} />
          <Route path='/category/:categorie' element={<Categories />} />
        </Route>
        <Route path='/thanks' element={<ThanksPage />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/login' element={<AcessForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
