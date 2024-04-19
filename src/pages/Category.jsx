import { useParams } from 'react-router-dom';
import BookCard from '../components/BookCard'
import { useEffect, useState } from "react"

import { getLivrosCategory } from "../services/livros"

export const Categories = () => {
  const { categorie } = useParams()
  const [books, setBooks] = useState([])

  async function fetchLivros() {
    try {
      // Obter os dados dos livros usando a função getLivros
      const data = await getLivrosCategory(categorie);
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


  return (
    <section className='categorySection'>
      <h1>{categorie}</h1>
      <div className='cardsContainer'>
        {
          books?.map(livro => <BookCard key={livro.id} book={livro} />)
        }
      </div>
    </section>
  )
}
