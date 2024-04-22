/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { PiFolderOpenLight } from "react-icons/pi";
import BookCard from '../components/BookCard'
import { useEffect, useState } from "react"
import { SectionTitle } from "../components/SectionTitle";
import { getLivrosCategory } from "../services/livros"
import { Loading } from "./svg/Loading";

export const CategorieCarrousssel = ({ category, alternativeText, alternativeIcon }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
    responsive: [
      {
        breakpoint: 979,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [books, setBooks] = useState([])

  async function fetchLivros() {
    try {
      // Obter os dados dos livros usando a função getLivros
      const data = await getLivrosCategory(category);
      // Definir os dados dos livros no estado utilizando setBooks
      setBooks(data);
    } catch (error) {
      // Lidar com erros, se houver
      console.error('Erro ao buscar livros:', error);
    }
  }

  useEffect(() => {
    fetchLivros()
  }, [])

  if(!books){
    return(
      <Loading/>
    )
  }

  return (
    <section>
      <SectionTitle icon={alternativeIcon || <PiFolderOpenLight />} category={category} title={alternativeText || category} />
      <div className="carrossel">
        <Slider {...settings}>
          {books &&
            (books.map(livro => <div key={livro.id}><BookCard book={livro} /></div>))
          }
        </Slider>
      </div>
    </section>
    )
}
