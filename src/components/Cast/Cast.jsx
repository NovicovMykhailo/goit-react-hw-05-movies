import { useEffect, useState } from 'react';
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
    setStatus('pending');
    try {
      API.getMovieActors(movieId).then(reviews => {
        setCast(reviews);
        setStatus('resolved');
      });
    } catch (error) {
      setMessage(error);
      setStatus('rejected');
    }
  }, [movieId]);
  // console.log(cast)

  if (status === 'pending') return <Loader />;
  if (status === 'rejected') return <Error message={message} />;
  if (status === 'resolved') {
    return (
      <div className={css.cast}>
        <h3 className={css.title}>Cast</h3>
        <ol className={css.listContainer}>
          {cast.map((item, index) => {
            return <CastCard item={item} key={item.id} index={index} />;
          })}
        </ol>
      </div>
    );
  }
};

export default Cast;

