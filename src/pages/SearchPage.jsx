import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BooksListContext } from "../context/BooksListContext";
import BookCard from '../components/BookCard';
import { BiGlasses } from 'react-icons/bi';
import { RiCompassDiscoverLine } from 'react-icons/ri';

export const SearchPage = () => {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get('term');
  const [searchTerm, setSearchTerm] = useState(search || '');
  const { booksList, fetchBooksList } = useContext(BooksListContext)
  const [founded, setFounded] = useState(null)

  useEffect(() => { fetchBooksList() }, [])

  useEffect(() => {
    const filteredList = booksList.filter(book => {
      return Object.entries(book).some(([key, value]) => {
        // Verificar se a chave não é 'img' e se o valor é uma string que contém 'searchTerm'
        return key !== 'img' && typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
    setFounded(filteredList);
  }, [searchTerm, booksList]);

  return (
    <div className='searchPage'>
      <div className='header'>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <div className='filters'>
          <h2>Results <span>&quot;{searchTerm}&quot;</span></h2>
          <select name="" id="">
            <option value="">Filter By:</option>
            <option value="category">Category</option>
            <option value="author">Author</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>

      <section className="categorySection">
        <h1>Search Results</h1>
        <h3 className="subtitle"><BiGlasses /> Discover the books you&apos;ve been searching for and embark on new literary journeys. <RiCompassDiscoverLine /></h3>
        <div className='cardsContainer'>
          {founded && founded.map(book => <BookCard key={book.id} book={book} />)}
        </div>
      </section>
    </div>
  );
}
