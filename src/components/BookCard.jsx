/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { memo, useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { BookMark } from "./svg/BookMark";
//Services
import { postFavorito, deleteFavorito } from "../services/favoritos"
import { formatPrice } from "../services/utils";
//CONTEXT
import { FavoritesListContext } from "../context/FavoritesListContext";
import { CartContext } from "../context/CartContext";

const BookCard = ({ book, i, fav }) => {

  const { id, title, price, img } = book
  const { favoritesIds, setFavoritesIds } = useContext(FavoritesListContext)
  const { cartProducts, setCartProducts } = useContext(CartContext)
  const formattedPrice = formatPrice(price)

  if (favoritesIds.includes(id)) {
    fav = true
  } else { fav = false }

  const insertFav = async (id) => {
    await postFavorito(id)
    setFavoritesIds([...favoritesIds, id])
  }

  const deleteFav = async (id) => {
    await deleteFavorito(id)
    const favoritesIdsAtt = favoritesIds.filter(item => item != id)
    setFavoritesIds(favoritesIdsAtt)
  }

  function HandleAddToCart() {
    const existingProductIndex = cartProducts.findIndex(product => product.id === book.id);

    if (existingProductIndex !== -1) {
      // If the product already exists, update its quantity
      const updatedCart = cartProducts.map((product, index) => {
        if (index === existingProductIndex) {
          return { ...product, quantity: product.quantity + 1, totalPrice: product.price * (product.quantity + 1) };
        }
        return product;
      });
      setCartProducts(updatedCart);
    } else {
      book.quantity = 1
      book.totalPrice = book.price
      const updatedCart = [...cartProducts, book];
      setCartProducts(updatedCart);
    }
  }

  return (
    <section className="card">
      <Link to={`/livros/${id}`}>
        <img src={img} alt="" />
        {i ? <span className="positionTrend">{i}</span> : ``}
      </Link>
      <div className="cardContent">
        <h2>{title}</h2>
        <div className="cardContentPrice">
          <span>{formattedPrice}</span>
          <button className={`saveBtn ${fav ? 'favorito' : ''}`} type="button"
            onClick={fav ? () => deleteFav(id) : () => insertFav(id)}>
            <BookMark />
          </button>
        </div>
      </div>
      <button className="cartButton"
        onClick={HandleAddToCart}>
        <BsCart2 />
      </button>
    </section >
  )
}

export default memo(BookCard);