import { Suspense, useEffect, useState } from 'react';
import css from './ModalCard.module.css';
import * as API from '../../services/themoviedb_API';
import { DateFormat, formatImage, numToFix, filteredAray } from '../../services/utils';
import CardItem from 'components/CardItem/CardItem';
import { useLocation } from 'react-router-dom';


const ModalCard = ({ data }) => {
  const [info, setInfo] = useState(null);
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState('idle');
  const location = useLocation()

  useEffect(() => {
    (async () => {
      setStatus('pending');
      try {
        await API.getActorsInfo(data)
          .then(movie => {
            setInfo(movie);
          })
          .then(() => {
            API.getMoviesCredits(data).then(movies => {
              setMovies(movies.cast);
              setStatus('resolved');
            });
          });
      } catch (error) {
        console.log(error);
        setStatus('rejected');
      }
    })();
  }, [data]);

  if (status === 'resolved') {
    const { birthday, name, homepage, place_of_birth, popularity, biography, profile_path, also_known_as } = info;

    return (
      <div className={css.modalCard}>
        <div className={css.leftSide}>
          <h2>
            {name}
            <br /> {DateFormat(birthday)}
          </h2>
          {/* <p>Was born: </p> */}
          <p>{place_of_birth}</p>
          <div className={css.photoCard}>
            <a href={homepage} target="blank">
              <img src={formatImage(profile_path)} alt={name} title={name} className={css.Image} />
            </a>
            <p className={css.biography}>{biography}</p>
          </div>
          <p>Popularity: {numToFix(popularity)} %</p>
          {filteredAray(also_known_as) !== '' && (
            <p>
              Also known as: <br />
              {filteredAray(also_known_as)}
            </p>
          )}
        </div>

        <ul className={css.movieList}>
          <Suspense fullback={<p>Loading...</p>}>
            {movies.map(movie => (
              <CardItem data={movie} key={movie.id} state={{ from: location }} />
            ))}
          </Suspense>
        </ul>
      </div>
    );
  }
};
export default ModalCard;


