import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import Header from "../components/Header";

export const AcessForm = () => {

  const [passwordType, setPasswordType] = useState('password');

  const togglePasswordType = (e) => {
    e.preventDefault()
    setPasswordType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <div className="acessPage">
      <Header/>
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
