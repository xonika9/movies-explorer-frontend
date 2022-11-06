import { MAIN_API_URL, HEADERS } from './config';

const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function register({ name, email, password }) {
  return fetch(`${MAIN_API_URL}/signup`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ name, email, password }),
  }).then((res) => checkResponse(res));
}

export function login({ email, password }) {
  return fetch(`${MAIN_API_URL}/signin`, {
    method: 'POST',
    headers: HEADERS,
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  }).then((res) => checkResponse(res));
}

export function logout() {
  return fetch(`${MAIN_API_URL}/signout`, {
    method: 'GET',
    headers: HEADERS,
    credentials: 'include',
  }).then((res) => checkResponse(res));
}

export function getCurrentUser() {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: 'GET',
    headers: HEADERS,
    credentials: 'include',
  }).then((res) => checkResponse(res));
}

export function updateUser({ name, email }) {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: 'PATCH',
    headers: HEADERS,
    credentials: 'include',
    body: JSON.stringify({ name, email }),
  }).then((res) => checkResponse(res));
}

export function getSavedMovies() {
  return fetch(`${MAIN_API_URL}/movies`, {
    method: 'GET',
    HEADERS,
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
  return fetch(`${MAIN_API_URL}/movies`, {
    method: 'POST',
    headers: HEADERS,
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
  return fetch(`${MAIN_API_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: HEADERS,
    credentials: 'include',
  }).then((res) => checkResponse(res));
}
