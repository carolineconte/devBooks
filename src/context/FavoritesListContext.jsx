/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { getFavoritos } from "../services/favoritos"

export const FavoritesListContext = createContext()

// Provider component
export const FavoritesListProvider = ({ children }) => {

  const [favoritesList, setFavoritesList] = useState([])
  const [favoritesIds, setFavoritesIds] = useState([])

  async function fetchFavoritesList() {
    try {
      const res = await getFavoritos();
      setFavoritesList(res);
      setFavoritesIds(res.map(objeto => objeto.id));
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    }
  }
  return (
    <FavoritesListContext.Provider 
    value={{ favoritesList, setFavoritesList, fetchFavoritesList,favoritesIds, setFavoritesIds }}>
      {children}
    </FavoritesListContext.Provider>
  );
};