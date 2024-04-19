/* eslint-disable react/prop-types */
import { GoTrash } from "react-icons/go";
import { formatPrice } from "../services/utils";
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext";

export const CartItemCard = ({ item }) => {
  const { id, img, title, author, quantity, totalPrice } = item
  const { cartProducts, setCartProducts } = useContext(CartContext)
  const [newQuantity, setNewQuantity] = useState(quantity)

  function handleRemove(id) {
    const listAtt = cartProducts.filter(p => p.id != id)
    setCartProducts(listAtt)
  }

  useEffect(() => {
    const updatedCart = cartProducts.map(product => {
      if (product.id === id) {
        return { ...product, quantity: newQuantity, totalPrice: product.price * newQuantity };
      }
      return product;
    });
    setCartProducts(updatedCart);

  }, [newQuantity])

  return (
    <div className="cartItem">
      <img src={img} alt="" />
      <div className="cartItemContent">
        <div className="cartItemContentTop">
          <p className="cartItemTilte">{title}</p>
          <p className="cartItemContentTopPrice">{formatPrice(totalPrice)}</p>
        </div>
        <p className="cartItemAuthor">{author}</p>
        <div className="cartItemContentActions">
          <div className='quantityInputContainer'>
            <button onClick={() => setNewQuantity(newQuantity - 1)}>-</button>
            <input onChange={(e) => setNewQuantity(e.target.value)} type="text" value={newQuantity} />
            <button onClick={() => setNewQuantity(newQuantity + 1)}>+</button>
          </div>
          <button className='deleteBtn'
            onClick={handleRemove}
          ><GoTrash /></button>
        </div>
      </div>
    </div>
  )
}
