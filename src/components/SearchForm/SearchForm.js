import './SearchForm.css';
import { useState, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ name, handleSearch, isChecked, handleCheckBox }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchQueryError, setSearchQueryError] = useState('');
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    setSearchQueryError('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchQuery
      ? handleSearch(searchQuery)
      : setSearchQueryError('Нужно ввести ключевое слово');
  };
  useEffect(() => {
    if (name === 'movies') {
      const query = localStorage.getItem('searchQuery');
      if (query) {
        setSearchQuery(query);
      }
    }
  }, [name]);
  return (
    <section className="search-form">
      <form
        className="search-form__container"
        name={`${name}-form`}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="search-form__input-group">
          <div className="search-icon"></div>
          <input
            className={`search-form__input ${
              searchQueryError && 'search-form__input_invalid'
            }`}
            type="text"
            name="search"
            placeholder="Введите ключевое слово"
            required
            autoFocus
            onChange={handleSearchInputChange}
            value={searchQuery}
          />
          <button
            className="button search-form__search-button"
            type="submit"
            aria-label="Поиск"
          />
          <div className="vertical-line"></div>
          <FilterCheckbox
            isChecked={isChecked}
            handleCheckBox={handleCheckBox}
          />
        </div>
        <span
          className={`search-form__input-error ${
            searchQueryError && 'search-form__input-error_visible'
          }`}
        >
          {searchQueryError}
        </span>
      </form>
    </section>
  );
}

export default SearchForm;
