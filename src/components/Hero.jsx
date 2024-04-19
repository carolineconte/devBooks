import { RiTreasureMapLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const HeroBanner = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirecionar para a página de busca com o termo como parte da URL
    navigate(`/search?term=${searchTerm}`);
  };

  return (
    <section className="heroBanner">
      <div className="heroContent">
        <h1>What book you looking for?</h1>
        <div className="heroSubtitle">
          <h2>Explore our catalog and find your next read.</h2>
          <img id="heroGIF" src="/book-gif.png" alt="" />
        </div>
        <form  onSubmit={handleSubmit}>
          <div className="inputContainer">
            <input type="text" placeholder="Type the name of book or author..."
              value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <CiSearch className="icon" />
          </div>
          <div className="elements">
            <button type="submit">
              Explore <span className="heroIcon"><RiTreasureMapLine /> </span>
            </button>
            <img id="dashLineHero" src="/DashLine.svg" alt="" />
          </div>
        </form>
      </div>
      <img id="heroImg" src="heroImg.jpg" alt="" />
    </section>
  )
}

export default HeroBanner