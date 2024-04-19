import axios from "axios";

const livrosAPI = axios.create({ baseURL: 'http://localhost:8000/livros' })

// Função assíncrona para obter livros
async function getLivros() {
  try {
    // Solicitação GET para obter os livros
    const response = await livrosAPI.get('/');
    // Retorne os dados dos livros
    return response.data;
  } catch (error) {
    // Lidar com erros
    console.error('Erro ao obter livros:', error);
    return null;
  }
}

// Função assíncrona para obter livros por categoria
async function getLivrosCategory(category) {
  try {
    // Solicitação GET para obter os livros
    const response = await livrosAPI.get(`/category/${category}`);
    // Retorne os dados dos livros
    return response.data;
  } catch (error) {
    // Lidar com erros
    console.error('Erro ao obter livros:', error);
    return null;
  }
}

// Função assíncrona para obter livro pelo ID
async function getBookById(id) {
  try {
    const res = await livrosAPI.get(`/${id}`)
    return res.data
  } catch (error) {
    console.error(error);
    return null
  }
}

export {
  getLivros,
  getLivrosCategory,
  getBookById
}