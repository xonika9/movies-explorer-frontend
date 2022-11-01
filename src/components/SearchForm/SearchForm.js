import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__container" name="search-form">
        <div className="search-form__input-group">
          <div className="search-icon"></div>
          <input
            className="search-form__input"
            type="text"
            name="search"
            placeholder="Фильм"
            required
            autoFocus
          />
          <button className="button search-form__search-button" type="submit" />
          <div className="vertical-line"></div>
          <FilterCheckbox />
        </div>
        <span className="search-form__input-error search-form__input-error_visible">
          Нужно ввести ключевое слово
        </span>
      </form>
    </section>
  );
}

export default SearchForm;
