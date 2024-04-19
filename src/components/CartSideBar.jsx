import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { FaChevronLeft } from "react-icons/fa";
import { FaRegSadCry } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { CartItemCard } from "./CartItemCard";
import { formatPrice } from "../services/utils";

export const CartSideBar = () => {
  const navigate = useNavigate()
  const { isCartActive, setIsCartActive, cartProducts } = useContext(CartContext)

  const totalCart = formatPrice(cartProducts.reduce((total, objeto) => {
    return total + objeto.totalPrice;
  }, 0))

  const totalItems = cartProducts.reduce((total, objeto) => {
    return total + objeto.quantity;
  }, 0)

  const formatCartHeader = () => {
    if (totalItems > 0) {
      const formattedQuantity = totalItems < 10 ? `0${totalItems}` : totalItems;
      const itemText = totalItems > 1 ? 'items' : 'item';
      return (<span>({formattedQuantity} {itemText})</span>);
    } else {
      return (
        <span>
          Nothing yet <FaRegSadCry />
        </span>
      )
    }
  }

  return (
    <div>
      <div className="modal" onClick={() => setIsCartActive(false)}></div>
      <div className={`${isCartActive ? 'cart--active' : ''} cart`}>
        <div className="cartHeader">
          <button className="cartBackBtn"
            onClick={() => setIsCartActive(false)}>
            <FaChevronLeft />
          </button>
          <p>
            Your Cart <span>{formatCartHeader()}</span>
          </p>
        </div>
        <div className="cartItems">
          {cartProducts.map((item) => (
            <CartItemCard item={item} key={item.id} />
          )
          )}
        </div>
        <div className="cartResume">
          <p>Subtotal: <span>{totalCart}</span></p>
          <button
            className="cartPaymentBtn"
            onClick={() => { navigate('/chekout'); setIsCartActive(false) }}>
            Checkout</button>
        </div>
      </div>
    </div>
  )
}
