import { FaLinkedinIn } from "react-icons/fa";
import { SlSocialGithub } from "react-icons/sl";
import { HiMiniComputerDesktop } from "react-icons/hi2";


const Footer = () => {
  return (
    <footer>
      <div className="social">
        <div className="rights">
          <p>D eveloped by Caroline Conte</p>
          <p>Figma project by eduardamirelly</p>
        </div>
        <div className="btnContainer">
          <a href="https://www.linkedin.com/in/caroline-contedasilva/" ><FaLinkedinIn /></a>
          <a href=""><SlSocialGithub /></a>
          <a href=""><HiMiniComputerDesktop /></a>
        </div>
      </div>

      About this site: React, SASS, Axios
    </footer>
  )
}

export default Footer