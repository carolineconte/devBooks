/* eslint-disable react/prop-types */

import { PiSparkle } from "react-icons/pi";
import { useEffect, useState } from "react"

import { getLivros } from "../services/livros"
import BookCard from '../components/BookCard'


export const TrendPage = () => {

  const [books, setBooks] = useState([])

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
    <section className="categorySection">
      <h1>Bestselling Books</h1>
      <h3 className="subtitle"><PiSparkle /> Discover the best books to read that are trending right now. <PiSparkle /></h3>
      <div className="cardsContainer">
        {books?.map((book, i) => <BookCard key={book.id} book={book} i={i + 1} />
        )}
      </div>
    </section>
  )
}