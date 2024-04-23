/* eslint-disable react/prop-types */

import { PiSparkle } from "react-icons/pi";
import { useContext } from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { BooksListContext } from "../context/BooksListContext";

export const Trending = () => {

  const { booksList } = useContext(BooksListContext)

  const books = booksList?.filter(item => item.trend === true)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
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

  return (
    <section className="trendingCarrossel">
      <h2>Trending Books</h2>
      <h3 className="subtitle"><PiSparkle /> Drag to explore</h3>
      <div className="trendingContainer">{ }
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