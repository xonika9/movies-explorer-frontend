import { mainApiUrl, headers } from './config';

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export function register({ name, email, password }) {
  return fetch(`${mainApiUrl}/signup`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ name, email, password }),
  }).then((res) => checkResponse(res));
}

export function login({ email, password }) {
  return fetch(`${mainApiUrl}/signin`, {
    method: 'POST',
    headers,
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  }).then((res) => checkResponse(res));
}

export function logout() {
  return fetch(`${mainApiUrl}/signout`, {
    method: 'GET',
    headers,
    credentials: 'include',
  }).then((res) => checkResponse(res));
}

export function getCurrentUser() {
  return fetch(`${mainApiUrl}/users/me`, {
    method: 'GET',
    headers,
    credentials: 'include',
  }).then((res) => checkResponse(res));
}

export function updateUser({ name, email }) {
  return fetch(`${mainApiUrl}/users/me`, {
    method: 'PATCH',
    headers,
    credentials: 'include',
    body: JSON.stringify({ name, email }),
  }).then((res) => checkResponse(res));
}

export function getSavedMovies() {
  return fetch(`${mainApiUrl}/movies`, {
    method: 'GET',
    headers,
    credentials: 'include',
  }).then((res) => checkResponse(res));
}

export function saveMovie({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  thumbnail,
  movieId,
  nameRU,
  nameEN,
}) {
  return fetch(`${mainApiUrl}/movies`, {
    method: 'POST',
    headers,
    credentials: 'include',
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
    }),
  }).then((res) => checkResponse(res));
}

export function deleteMovie(id) {
  return fetch(`${mainApiUrl}/movies/${id}`, {
    method: 'DELETE',
    headers,
    credentials: 'include',
  }).then((res) => checkResponse(res));
}
