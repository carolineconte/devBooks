import { Link } from "react-router-dom";

import { PiPathLight } from "react-icons/pi";

import HeroBanner from '../components/Hero'
import { CategorieCarrousssel } from "../components/CategorieCarrousssel";
import { Trending } from "../components/TrendingCarrousssel";

export const Home = () => {

  const categoriesHome = ['Adventure','Romance', 'Fairy Tale']
  const categories = ['Adventure', 'Fantasy', 'Science fiction', 'Romance', 'Fairy Tale', 'Drama',]

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
        {categoriesHome && categoriesHome.map(cat => <CategorieCarrousssel key={cat} category={cat} />)}
      </div>
    </>
  )
}
