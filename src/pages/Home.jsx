import { Link } from "react-router-dom";

import { PiPathLight } from "react-icons/pi";

import HeroBanner from '../components/Hero'
import { CategorieCarrousssel } from "../components/CategorieCarrousssel";
import { Trending } from "../components/TrendingCarrousssel";
//CONTEXT
import { useContext, useEffect } from "react";
import { FavoritesListContext } from "../context/FavoritesListContext";

export const Home = () => {

  const { fetchFavoritesList } = useContext(FavoritesListContext)
  const categories = ['Adventure', 'Fantasy', 'Science fiction', 'Romance', 'Fairy Tale', 'Drama',]


  useEffect(() => {
    fetchFavoritesList()
  }, [])


  return (
    <>
      <HeroBanner />
      <Trending />
      <h2 className="categoriesSectionTitle"><PiPathLight /><span>Categories</span></h2>
      <section className="categoriesSection">
        {categories && categories.map((cat, i) =>
          <Link className="categoriesHome" to={`/category/${cat}`} key={i}>{cat}</Link>
        )}
      </section>
      <div>
        <h2 id="title">Featured Categories</h2>
        <h3 className="subtitle"> Explore today&apos;s selections and find your next great read.</h3>
        {categories && categories.map(cat => <CategorieCarrousssel key={cat} category={cat} />)}
      </div>
    </>
  )
}
