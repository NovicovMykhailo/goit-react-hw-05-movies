import { useSearchParams, useLocation } from 'react-router-dom';
import css from './SearchBar.module.css';
import { Suspense, useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import * as API from '../../services/themoviedb_API';

import Gallery from 'components/Gallery/Gallery';
import CardItem from 'components/CardItem/CardItem';
import Tost from 'components/Tost/Tost';
import Button from 'components/Button/Button';
import { filteredData } from '../../services/utils';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get('query') ?? '';

  const [foundMovies, setFoundMovies] = useState([]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [showTost, setShowTost] = useState(false);
  const [page, setPage] = useState(2);
  const location = useLocation();

  useEffect(() => {
    if (value === '') {
      return;
    }
    if (value !== '') {
      (async () => {
        setStatus('pending');
        try {
          await API.searchMovies(value).then(movies => {
            setFoundMovies(movies);
            if (movies.length === 0) {
              setShowTost(true);

              setTimeout(() => {
                setShowTost(false);
              }, 2000);
            }
            setStatus('resolved');
          });
        } catch (error) {
          setError(error);
          setStatus('rejected');
        }
      })();
    }
  }, [value]);



  function onSubmit(e) {
    e.preventDefault();
    if (input === '') {
      setFoundMovies([]);
      setSearchParams({});
      setStatus('ide');
      setShowTost(true);

      setTimeout(() => {
        setShowTost(false);
      }, 2000);

      return;
    } else {
      const nextEl = input !== '' ? { query: input } : {};
      setSearchParams(nextEl);
    }
  }
  async function loadMore() {
    setPage(prev => (prev += 1));

    try {
      API.searchMovies(value, page).then(movies => {
        setFoundMovies(prev => [...prev, ...movies]);
      });
    } catch (e) {}
  }


  return (
    <>
      <form className={css.SearchForm} onSubmit={onSubmit}>
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
      {showTost && <Tost message={'Please enter a title to search for the film'} />}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <Error message={error} />}
      {status === 'resolved' && foundMovies.length > 0 && (
        <>
          <Gallery>
            <Suspense>
              {filteredData(foundMovies.sort((a, b) => a.popularity - b.popularity)).map(movie => (
                <CardItem data={movie} key={movie.id} state={{ from: location }} />
              ))}
            </Suspense>
          </Gallery>
          {foundMovies.length !== 0 && foundMovies.length > 18 && <Button onClick={loadMore} />}
        </>
      )}
      {status === 'resolved' && foundMovies.length === 0 && showTost && (
        <Tost message={'Oops, movies not found'} />
      )}
    </>
  );
};
export default SearchBar;
