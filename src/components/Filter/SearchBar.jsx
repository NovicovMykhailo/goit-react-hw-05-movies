import { useSearchParams } from 'react-router-dom';
import css from './SearchBar.module.css';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import * as API from '../../services/themoviedb_API';

import Gallery from 'components/Gallery/Gallery';
import CardItem from 'components/CardItem/CardItem';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get('query') ?? '';

  const [foundMovies, setFoundMovies] = useState([]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (value === '') {
      return;
    }
    if (value !== '') {
      (async () => {
        setStatus('pending');
        try {
          API.searchMovies(value).then(movies => {
            setFoundMovies(movies);
            setStatus('resolved');
          });
        } catch (error) {
          setError(error);
          setStatus('rejected');
        }
      })();
    }
  }, [value]);

  // const updateQueryString = (e) =>{
  //   const query = e.target.value;
  //   const nextEl = query !== '' ? { query: e.target.value } : {};
  //   setSearchParams(nextEl);
  // }

  function onSubmit(e) {
    e.preventDefault();
    const nextEl = input !== '' ? { query: input } : {};
    setSearchParams(nextEl);
  }

  return (
    <>
      <form className={css.SearchForm} onClick={onSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={e => setInput(e.target.value)}
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={input}
        />
      </form>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <Error message={error} />}
      {status === 'resolved' && (
        <Gallery>
          {foundMovies.map(movie => (
            <CardItem data={movie} key={movie.id} />
          ))}
        </Gallery>
      )}
    </>
  );
};
export default SearchBar;
