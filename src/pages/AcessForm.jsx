import { useContext, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import Header from "../components/Header";
import { CartSideBar } from "../components/CartSideBar";
import { CartContext } from "../context/CartContext";

export const AcessForm = () => {

  const [passwordType, setPasswordType] = useState('password');
  const { isCartActive } = useContext(CartContext)

  const togglePasswordType = (e) => {
    e.preventDefault()
    setPasswordType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <div className="acessPage">
      
      <Header/>
      {isCartActive && <CartSideBar />}
      <form className="formLogin">
        <label>Username:</label>
        <input type="text" placeholder='Enter your username:' />

        <label>Password</label>
        <div className="passwordInput">
          <input type={passwordType} placeholder="Enter your password:"/>
          <button onClick={togglePasswordType}>
            {passwordType === 'password' ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>

        <button className="formBtn">Sign in:</button>
      </form>
    </div>
  )
}
