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
        <Route index element={<StandardPage><Home /></StandardPage>} />
        <Route path='/favoritos' element={<StandardPage><Favoritos /></StandardPage>} />
        <Route path='/livros/:id' element={<StandardPage><ProductDetail /></StandardPage>} />
        <Route path='/category/:categorie' element={<StandardPage><Categories /></StandardPage>} />
        <Route path='/trendingbooks' element={<StandardPage><TrendPage /></StandardPage>} />
        <Route path='/myfavorites' element={<StandardPage><Favoritos /></StandardPage>} />
        <Route path='/chekout' element={<StandardPage><Checkout /></StandardPage>} />
        <Route path='/search' element={<StandardPage><SearchPage /></StandardPage>} />
        <Route path='/thanks' element={<ThanksPage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/login' element={<AcessForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
