import axios from "axios";

const favoritosAPI = axios.create({ baseURL: 'https://devbooks-server.onrender.com/favoritos' })

async function getFavoritos() {
  try {
    const res = await favoritosAPI.get('/')
    return res.data
  } catch (error) {
    console.error('Erro ao obter livros:', error)
    return null;
  }
}

async function postFavorito(id) {
  try {
    await favoritosAPI.post(`/${id}`)
  } catch (error) {
    console.error('Erro ao obter livros:', error)
    return null;
  }
}

async function deleteFavorito(id) {
  await favoritosAPI.delete(`/${id}`)
}

export {
  getFavoritos,
  postFavorito,
  deleteFavorito
}