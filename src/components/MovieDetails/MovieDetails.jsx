import { Suspense, useEffect, useState } from 'react';
import * as API from '../../services/themoviedb_API';
import css from './MovieDetails.module.css';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import bgPlaceholder from '../../images/poster_bg.jpg';
import MovieDescription from './MovieDescription';


const MovieDetails = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const location = useLocation();
  const [page] = useState(() => {
    return location.state === null ? '/movies' : location.state.from;
  });

  useEffect(() => {
    (async () => {
      setStatus('pending');
      try {
        await API.getDetails(movieId).then(movie => {
          setInfo(movie);
          setStatus('resolved');
        });
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    })();
  }, [movieId]);

  const bgNormalize = bg => {
    if (bg === null) return `url( ${bgPlaceholder})`;
    if (bg) return `url(https://image.tmdb.org/t/p/original/${bg})`;
  };

  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'rejected') {
    return <Error message={error} />;
  }
  if (status === 'resolved') {
    const { backdrop_path } = info;

    return (
      <>
        <article className={css.poster}>
          <Link className={css.goBackBtn} to={page}></Link>
          {<div className={css.BG} style={{ backgroundImage: bgNormalize(backdrop_path) }}></div>}
          <MovieDescription info={info} />
        </article>
        <div className={css.outletContainer}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </>
    );
  }
};
export default MovieDetails;
