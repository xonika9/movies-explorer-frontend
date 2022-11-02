import { shortMovies } from './config';

const filterByKeyword = (array, keyWord) => {
  return array.filter((item) => {
    return item.nameRU.toLowerCase().includes(keyWord.toLowerCase());
  });
};
const filterByDuration = (array) => {
  return array.filter((item) => item.duration <= shortMovies);
};

export { filterByKeyword, filterByDuration };
