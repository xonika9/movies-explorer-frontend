import { MOVIES_API_URL, HEADERS } from './config';

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export function getAllMovies() {
  return fetch(MOVIES_API_URL, {
    method: 'GET',
    headers: HEADERS,
  }).then((res) => checkResponse(res));
}
