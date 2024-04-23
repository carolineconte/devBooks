/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { getLivros } from "../services/livros"

export const BooksListContext = createContext()

// Provider component
export const BooksListProvider = ({ children }) => {

  const [booksList, setBooksList] = useState([])
  const [isloading, setIsLoading] = useState(null)

  async function fetchBooksList() {
    try {
      setIsLoading(true)
      const data = await getLivros();
      setBooksList(data);
      setIsLoading(false)
    } catch (error) {
      // Lidar com erros, se houver
      console.error('Error:', error);
    }
  }
  

  return (
    <BooksListContext.Provider
      value={{ booksList, fetchBooksList,isloading, setIsLoading }}>
      {children}
    </BooksListContext.Provider>
  );
};