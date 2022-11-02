import { moviesApiUrl, headers } from './config';

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export function getAllMovies() {
  return fetch(moviesApiUrl, {
    method: 'GET',
    headers,
  }).then((res) => checkResponse(res));
}
