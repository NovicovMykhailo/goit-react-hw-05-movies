import axios from 'axios';

//hedders
const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    'Accept-Language': 'en-US,en;',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDcxODI0YzJjM2ZmM2FlZjExOGZjZjJhMWY4NmEwYyIsInN1YiI6IjY0NmM4MTEyMmJjZjY3MDBmZTYyMTZhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7t2sbFYyvcaDAtE0fXnZqWJkrF8c6YiesSuOdcaSKsk',
  },
});

// фильмы в тренде сегодня
export async function getTrendingMovies() {
  try {
    const response = await API.get(`/trending/movie/day`);
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}
//коллекция одноименных фильмов
export async function searchMovies(keyword, page = 1) {
  try {
    const response = await API.get(
      `/search/movie?query=${keyword
        .toLowerCase()
        .trim()}&include_adult=true&page=${page}`
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}
// детали фильма по айди
export async function getDetails(ID) {
  try {
    const response = await API.get(`/movie/${ID}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
//Актерский состав фильма по айди
export async function getMovieActors(ID) {
  try {
    const response = await API.get(`/movie/${ID}/credits`);
      console.log(response.data.cast.map(actor => actor.name))
    return response.data.cast.map(actor => actor.name);
  } catch (error) {
    console.log(error);
  }
}
// обзоры фильма по айди
export async function getReviews(ID, page = 1) {
  try {
    const response = await API.get(`/movie/${ID}/reviews?page=${page}`);
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}
