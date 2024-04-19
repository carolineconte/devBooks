import { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const Header = () => {

  const menu = ['Trending Books', 'My favorites'];
  const { setIsCartActive, isCartActive, cartProducts } = useContext(CartContext)

  const totalItems = cartProducts.reduce((total, objeto) => {
    return total + objeto.quantity;
  }, 0)

  return (
    <>
      <header className="desktopHeader">
        <Link to={'/'}>
          <img className="logoHeader" src="/logobooks.png" alt="Logo devBooks" />
        </Link>

        <nav>
          <ul className="navHeader">
            {menu.map(item => (
              <Link key={item} to={`/${item.toLowerCase().replace(/\s/g, '')}`}>{item}</Link>
            ))}
          </ul>
        </nav>

        <div className="btnContainer">
          <div className="cartBtn">
            {totalItems > 0 && <span className="itemsPrev">{totalItems}</span>}
            <button onClick={() => setIsCartActive(!isCartActive)}>
              <IoBag />
            </button>
          </div>
          <Link to='/login'>
            <FaUserAlt />
          </Link>
        </div>
      </header>

      <header className="headerMobile">
        <div className="headerMobileTop">
          <Link to={'/'}>
            <img className="logoHeader" src="/logobooks.png" alt="Logo devBooks" />
          </Link>

          <div className="btnContainer">
            <div className="cartBtn">
              {totalItems > 0 && <span className="itemsPrev">{totalItems}</span>}
              <button onClick={() => setIsCartActive(!isCartActive)}>
                <IoBag />
              </button>
            </div>
            <button><FaUserAlt /></button>
          </div>
        </div>
        <nav>
          <ul className="navHeader">
            {menu.map(item => (
              <Link key={item} to={`/${item.toLowerCase().replace(/\s/g, '')}`}>{item}</Link>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header