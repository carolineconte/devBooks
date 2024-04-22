import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from 'react-router-dom';
import { CartItemCard } from "../components/CartItemCard";
import { formatPrice } from "../services/utils";
import { EmptyCart } from "../components/svg/EmptyCart";

export const Checkout = () => {
  const navigate = useNavigate()
  const { cartProducts } = useContext(CartContext)
  const [shipCost, setShipCost] = useState(0)

  const totalCart = cartProducts.reduce((total, objeto) => {
    return total + objeto.totalPrice;
  }, 0)

  if (cartProducts.length < 1) {
    return (
      <EmptyCart />
    )
  }
  return (
    <div className="checkoutPage">
      <h1>Complete your purchase <span></span></h1>

      <div className="chekoutContainer">

        <section className="border cartItems itemsCheckoutResume">
          <div className="itemsContainer">
            {cartProducts.map((item) => (
              <CartItemCard item={item} key={item.id} />
            ))}
          </div>
          <p className="subtotalCheckout">Subtotal: <span>{formatPrice(totalCart)}</span></p>
        </section>

        <section className="border addressResume">
          <h2>Shipping Adress</h2>
          <form className="addressForm">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Name" />
            <label htmlFor="">Street, n</label>
            <input type="text" placeholder="name street,n" />
            <label htmlFor="">PostCode</label>
            <input type="text" placeholder="Postcode" />
            <label htmlFor="">State</label>
            <input type="text" placeholder="State" />
          </form>

          <h2>Shipping method</h2>
          <form className="shippingForm">
            <label className="subtitle" >Choose Shipping Method:</label>
            <label >
              <input type="radio" onChange={() => setShipCost(5)} name="shipping-method" value="regular" />
              Regular (3-5 business days, $5)
            </label>
            <label >
              <input type="radio" onChange={() => setShipCost(10)} name="shipping-method" value="express" />
              Express (1-2 business days, $10)
            </label>
          </form>
        </section>

        <section className="border checkoutPayment">
          <h2>Payment details</h2>
          <div className="cupomContainer">
            <label htmlFor="">Gift Card / Discount code</label>
            <input type="text" placeholder="Cardholder name" />
            <button>Apply</button>
          </div>
          <form className="addressForm">
            <label className="subtitle" >Card information:</label>
            <input type="text" placeholder="Cardholder name" />
            <input type="text" placeholder="Card number" />
            <div className="container">
              <input type="text" placeholder="MM" />
              <input type="text" placeholder="YY" />
              <input type="text" placeholder="CVV" />
            </div>
          </form>
          <div className="resumeCosts">
            <p>Sub total<span>{formatPrice(totalCart)}</span></p>
            <p>Tax<span>{formatPrice(totalCart * .12)}</span></p>
            <p>Discount<span>{formatPrice(0)}</span></p>
            <p>Shipping<span>{formatPrice(shipCost)}</span></p>
          </div>
          <button className="cartPaymentBtn"
            onClick={() => navigate('/thanks')}>
            Pay {formatPrice(totalCart + shipCost +( totalCart * .12))}
          </button>
        </section>

      </div>
    </div>
  )
}
