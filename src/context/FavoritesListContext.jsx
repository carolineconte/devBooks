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
      const data = await getFavoritos();
      setFavoritesList(data);
      setFavoritesIds(data.map(objeto => objeto.id));
    } catch (error) {
      // Lidar com erros, se houver
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