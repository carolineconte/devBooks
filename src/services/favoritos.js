import axios from "axios";

const favoritosAPI = axios.create({ baseURL: 'http://localhost:8000/favoritos' })

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
  await favoritosAPI.post(`/${id}`)

}

async function deleteFavorito(id) {
  await favoritosAPI.delete(`/${id}`)
}

export {
  getFavoritos,
  postFavorito,
  deleteFavorito
}