/* eslint-disable react/prop-types */

import { PiSparkle } from "react-icons/pi";
import { useEffect, useState } from "react"

import { getLivros } from "../services/livros"

/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";



export const Trending = () => {

  const [books, setBooks] = useState([])

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

  async function fetchLivros() {
    try {
      // Obter os dados dos livros usando a função getLivros
      const data = await getLivros();
      setBooks(data.filter(item => item.trend === true));
    } catch (error) {
      // Lidar com erros, se houver
      console.error('Erro ao buscar livros:', error);
    }
  }

  useEffect(() => {
    fetchLivros()
  }, [])

  return (
    <section className="trendingCarrossel">
      <h2>Trending Books</h2>
      <h3 className="subtitle"><PiSparkle /> Drag to explore</h3>
      <div className="trendingContainer">
        <Slider {...settings}>
          {
            books?.map(book =>
              <Link to={`/livros/${book.id}`} className="trendingImg" key={book.id}>
                <img src={book.img} alt="" />
              </Link>
            )
          }
        </Slider>
      </div>
    </section>
  )
}