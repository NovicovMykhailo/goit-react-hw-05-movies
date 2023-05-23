import css from './SearchBar.module.css';
const { useState } = require('react');

const SearchBar = props => {
  const { onSubmit } = props;
  const [value, setValue] = useState('');

  function reset() {
    return setValue('');
  }
  function onChange(e) {
   setValue(e.target.value);
  }

  return (
    <form className={css.SearchForm} onSubmit={onSubmit}>
      <button type="submit" className={css.SearchFormButton}>
        <span className={css.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        onChange={onChange}
        onClick={reset}
        className={css.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        value={value}
      />
    </form>
  );
};
export default SearchBar;
