import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter">
      <label className="button filter__label" htmlFor="shorts">
        <input
          className="filter__checkbox"
          type="checkbox"
          name="shorts"
          id="shorts"
        />
        <span className="filter__tumbler" />
        <span className="filter__text">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
