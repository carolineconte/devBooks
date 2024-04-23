import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import Favoritos from './pages/Favoritos'
import { ProductDetail } from './pages/ProductDetail'
import { NotFound } from './pages/NotFound'
import { StandardPage } from './pages/StandardPage'

import { Categories } from './pages/Category'
import { TrendPage } from './pages/TrendPage'
import { SearchPage } from './pages/SearchPage'
import { Suspense, lazy } from 'react'
import { Loading } from './components/svg/Loading'

const ThanksPage = lazy(() => import('./pages/ThanksPage'))
const Checkout = lazy(() => import('./pages/Checkout'))
const AcessForm = lazy(() => import('./pages/AcessForm'));

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </BrowserRouter>
  )
}

export default App
