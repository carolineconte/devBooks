import { useContext, useEffect } from "react"
import BookCard from '../components/BookCard'
import { FavoritesListContext } from "../context/FavoritesListContext"
import { NoResultsFavorites } from "../components/svg/NoResultsFavorites"
import {  PiHeart } from "react-icons/pi"


const Favoritos = () => {

  const { favoritesList, fetchFavoritesList } = useContext(FavoritesListContext)

  useEffect(() => {
    fetchFavoritesList()
  }, [])

  if (favoritesList?.length <= 0) {
    return (
      <NoResultsFavorites />
    )
  }

  return (
    <section className='favoritesSection'>
      <h1>Favorite Books</h1>
      <h3 className="subtitle"><PiHeart /> Explore the books you&apos;ve been dreaming to read and plan your next adventures. <PiHeart /></h3>
      <div className="favoritesContainer">
        {
          favoritesList?.map(book => (<BookCard key={book.id} book={book} fav={true} />))
        }
      </div>
    </section>
  )
}

export default Favoritos