/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { getLivros } from "../services/livros"

export const BooksListContext = createContext()

// Provider component
export const BooksListProvider = ({ children }) => {

  const [booksList, setBooksList] = useState([])

  async function fetchBooksList() {
    try {
      const data = await getLivros();
      setBooksList(data);
    } catch (error) {
      // Lidar com erros, se houver
      console.error('Error:', error);
    }
  }
  return (
    <BooksListContext.Provider
      value={{ booksList, fetchBooksList }}>
      {children}
    </BooksListContext.Provider>
  );
};