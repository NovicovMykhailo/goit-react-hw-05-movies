import css from './SearchBar.module.css';
const { useState } = require('react');

const SearchBar = props => {
  const { onSubmit } = props;
  const [value, setValue] = useState('');

  function reset() {
    return setValue('');
  }

  return (
    <form className={css.SearchForm} onSubmit={onSubmit}>
      <button type="submit" className={css.SearchFormButton}>
        <span className={css.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        onChange={e => setValue(e)}
        onClick={reset}
        className={css.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={value}
      />
    </form>
  );
};
export default SearchBar;
