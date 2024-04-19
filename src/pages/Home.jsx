import { Link } from "react-router-dom";

import { PiPathLight } from "react-icons/pi";

import HeroBanner from '../components/Hero'
import { CategorieCarrousssel } from "../components/CategorieCarrousssel";
import { Trending } from "../components/TrendingCarrousssel";
//CONTEXT
import { useContext, useEffect } from "react";
import { FavoritesListContext } from "../context/FavoritesListContext";
import { BooksListContext } from "../context/BooksListContext";

export const Home = () => {

  const { fetchFavoritesList } = useContext(FavoritesListContext)
  const categories = ['Adventure', 'Fantasy', 'Science fiction', 'Romance', 'Fairy Tale', 'Drama',]

  const { fetchBooksList } = useContext(BooksListContext)

  useEffect(() => {
    fetchBooksList()
    fetchFavoritesList()
  }, [])

  // Função para gerar um índice aleatório dentro dos limites da array
  const getRandomIndex = (array) => Math.floor(Math.random() * array.length);
  // Array para armazenar os valores aleatórios selecionados
  const featuredCategories = [];
  // Adicionar dois valores aleatórios da primeira array à segunda array
  while (featuredCategories.length < 2) {
    const randomIndex = getRandomIndex(categories);
    const randomValue = categories[randomIndex];
    if (!featuredCategories.includes(randomValue)) {
      featuredCategories.push(randomValue);
    }
  }

  return (
    <>
      <HeroBanner />
      <Trending />
      <h2 className="categoriesSectionTitle"><PiPathLight /><span>Categories</span></h2>
      <section className="categoriesSection">
        {categories.map((cat, i) =>
          <Link className="categoriesHome" to={`/category/${cat}`} key={i}>{cat}</Link>
        )}
      </section>
      <div>
        <h2 id="title">Featured Categories</h2>
        <h3 className="subtitle"> Explore today&apos;s selections and find your next great read.</h3>
        {featuredCategories.map(cat => <CategorieCarrousssel key={cat} category={cat} />)}
      </div>
    </>
  )
}
