import { Suspense, useEffect, useState } from 'react';
import * as API from '../../services/themoviedb_API';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

import css from './Cast.module.css';
import CastCard from './CastCard';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      setStatus('pending');
      try {
        await API.getMovieActors(movieId).then(reviews => {
          setCast(reviews);
          setStatus('resolved');
        });
      } catch (error) {
        setMessage(error);
        setStatus('rejected');
      }
    })();
  }, [movieId]);

  if (status === 'pending') return <Loader />;
  if (status === 'rejected') return <Error message={message} />;
  if (status === 'resolved') {
    return (
      <div className={css.cast}>
        <h3 className={css.title}>Cast</h3>

        <ol className={css.listContainer}>
          <Suspense fallback={<Loader />}>
            {cast.map((item, index) => {
              return <CastCard item={item} key={item.id} index={index} />;
            })}
          </Suspense>
        </ol>
      </div>
    );
  }
};

export default Cast;
