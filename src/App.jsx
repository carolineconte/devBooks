import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

import { Home } from './pages/Home'
import { StandardPage } from './pages/StandardPage'

const ThanksPage = lazy(() => import('./pages/ThanksPage'))
const Checkout = lazy(() => import('./pages/Checkout'))
const AcessForm = lazy(() => import('./pages/AcessForm'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
const TrendPage = lazy(() => import('./pages/TrendPage'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Categories = lazy(() => import('./pages/Category'));
const Favoritos = lazy(() => import('./pages/Favoritos'));
const Loading = lazy(() => import('./components/svg/Loading'));

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
