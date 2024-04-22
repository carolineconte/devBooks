import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById } from "../services/livros"
import { BsCart2 } from "react-icons/bs";
import { CategorieCarrousssel } from "../components/CategorieCarrousssel";
import { PiPathLight } from "react-icons/pi";
import { FavoritesListContext } from '../context/FavoritesListContext';
import { deleteFavorito, postFavorito } from '../services/favoritos';
import { Loading } from '../components/svg/Loading';
import { BookMark } from '../components/svg/BookMark';
import { formatPrice } from '../services/utils';
import { CartContext } from '../context/CartContext';

export const ProductDetail = () => {

  const navigate = useNavigate()
  const { id } = useParams()

  let [qnt, setQnt] = useState(1)
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const { favoritesIds, setFavoritesIds } = useContext(FavoritesListContext);
  const [book, setBook] = useState({});
  const formattedPrice = formatPrice(book?.price)

  const isFavorite = favoritesIds.includes(id)

  async function fetchBook() {
    try {
      const data = await getBookById(id)
      setBook(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchBook()
  }, [])

  const insertFav = async (e, id) => {
    e.preventDefault()
    await postFavorito(id)
    setFavoritesIds([...favoritesIds, id])
  }
  const deleteFav = async (e, id) => {
    e.preventDefault()
    await deleteFavorito(id)
    const favoritesIdsAtt = favoritesIds.filter(item => item != id)
    setFavoritesIds(favoritesIdsAtt)
  }

  function HandleAddToCart(e) {
    e.preventDefault()
    const existingProductIndex = cartProducts.findIndex(product => product.id === book.id);

    if (existingProductIndex !== -1) {
      // If the product already exists, update its quantity
      const updatedCart = cartProducts.map((product, index) => {
        if (index === existingProductIndex) {
          return { ...product, quantity: product.quantity + qnt, totalPrice: product.price * (product.quantity + qnt) };
        }
        return product;
      });
      setCartProducts(updatedCart);
    } else {
      const updatedCart = [...cartProducts, { ...book, quantity: qnt, totalPrice: book.price }];
      setCartProducts(updatedCart);
    }
  }

  function HandleBuyNow(e) {
    e.preventDefault();
    setCartProducts([{ ...book, quantity: 1, totalPrice: book.price }])
    navigate('/chekout')
  }

  if (!book.title) {
    return (
      <Loading />
    )
  }

  return (
    <>
      <section className='detailBookSection'>
        <img className='detailBookImg' src={book?.img} alt="" />
        <div className='detailBookContent'>
          <div className='detailBookHeader'>
            <h1>{book?.title}</h1>
            <button
              className={`${isFavorite ? 'favorito' : ''} saveBtn`}
              onClick={isFavorite ? () => deleteFav(id) : () => insertFav(id)}
            >
              <BookMark />
            </button>
          </div>

          <p className='detailBookText author'>Author: {book?.author}</p>
          <p className='detailBookText description'>{book?.description}</p>

          <div className='priceQntContainer'>
            <p className='detailBookPrice'>{formattedPrice}</p>
            <div className='quantityInputContainer'>
              <button onClick={() => setQnt(qnt > 1 ? qnt -= 1 : qnt)}>-</button>
              <input onChange={(e) => setQnt(e.target.value)} type="text" value={qnt} />
              <button onClick={() => setQnt(qnt += 1)}>+</button>
            </div>
          </div>
          <div className='detailBookShopBtns'>
            <button onClick={HandleAddToCart}><BsCart2 /></button>
            <button onClick={HandleBuyNow}>Buy Now</button>
          </div>
        </div>
      </section>
      <div className='detailBookCarrossel'>
        <CategorieCarrousssel category={book?.category}
          alternativeText={`Explore More of ${book?.category}`}
          alternativeIcon={<PiPathLight />}
        />
      </div>
    </>
  )
}
