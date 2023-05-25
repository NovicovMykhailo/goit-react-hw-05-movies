import { useEffect, useState } from 'react';
import * as API from '../../services/themoviedb_API';
import css from './MoviePoster.module.css';
import { format } from 'date-fns';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
const { useParams } = require('react-router-dom');

const MoviePoster = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus('pending');
    try {
      API.getDetails(movieId).then(movie => {
        setInfo(movie);
        setStatus('resolved');
      });
    } catch (error) {
      setError(error);
      setStatus('rejected');
    }
  }, [movieId]);

  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'rejected') {
    return <Error message={error} />;
  }

  if (status === 'resolved') {
    const {
      backdrop_path,
      genres,
      poster_path,
      original_title,
      homepage,
      overview,
      popularity,
      vote_average,
      release_date,
      tagline,
      production_countries,
      production_companies,
    } = info;
    const normalizedDate = format(new Date(release_date), ' dd MMM yyyy');

    return (
      <article className={css.poster}>
        <div
          className={css.BG}
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})` }}
        ></div>
        <div className={css.posterContainer}>
          <a rel="stylesheet" href={homepage} className={css.posterLink}>
            <img
              className={css.posterImage}
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={original_title}
              loading="lazy"
              width="400"
            />
          </a>
          <p className={css.locations}>
            {String(production_countries.map(name => name.name))
              .split(',')
              .join(', ')}
          </p>
        </div>

        <aside>
          <div className={css.topAside}>
            <h2>{original_title}</h2>
            <p>{tagline}</p>
            <div>
              <h4>Genres: </h4>
              <p>
                {String(genres.map(name => name.name))
                  .split(',')
                  .join(', ')}
              </p>
            </div>
            <h4>Overview: </h4>
            <p>{overview}</p>
          </div>

          <div className={css.bottomAside}>
            <ul className={css.companies}>
              {production_companies.map(({ name, logo_path, origin_country, id }) => {
                if (logo_path !== null) {
                  return (
                    <li key={id}>
                      <img
                        className={css.companiesLogo}
                        src={`https://image.tmdb.org/t/p/w500/${logo_path}`}
                        alt={name}
                        title={`${name}, ${origin_country}`}
                        loading="lazy"
                      />
                    </li>
                  );
                }
                return '';
              })}
            </ul>
            <ul className={css.stats}>
              <li>
                Views:
                <p> {Number.parseInt(popularity)}</p>
              </li>
              <li>
                <p>Vote Average:</p>
                <p>{vote_average}</p>
              </li>
              <li>
                <p>Released in:</p>
                <p>{normalizedDate}</p>
              </li>
            </ul>
          </div>
        </aside>
      </article>
    );
  }
};
export default MoviePoster;

// const obj = {
//   backdrop_path: '/ztWbwSlQNduTUFomNP2GnTPduFm.jpg',
//   budget: 9000000,

//   homepage: 'https://www.loveagain.movie',
//   overview:
//     "Mira Ray, dealing with the loss of her fiancé, sends a series of romantic texts to his old cell phone number… not realizing the number was reassigned to Rob Burns' new work phone. A journalist, Rob is captivated by the honesty in the beautifully confessional texts. When he’s assigned to write a profile of megastar Céline Dion, he enlists her help in figuring out how to meet Mira in person and win her heart.",
//   popularity: 69.082,
//   poster_path: '/usfDx1g1eN9eZ8kxfrbLRkKVjit.jpg',
//   production_companies: [
//     {
//       id: 3287,
//       logo_path: '/bz6GbCQQXGNE56LTW9dwgksW0Iw.png',
//       name: 'Screen Gems',
//       origin_country: 'US',
//     },
//     {
//       id: 3528,
//       logo_path: '/cCzCClIzIh81Fa79hpW5nXoUsHK.png',
//       name: 'Thunder Road',
//       origin_country: 'US',
//     },
//     {
//       id: 84792,
//       logo_path: '/7Rfr3Zu6QnHpXW2VdSEzUminAQd.png',
//       name: '2.0 Entertainment',
//       origin_country: 'US',
//     },
//   ],
//   production_countries: [
//     {
//       iso_3166_1: 'US',
//       name: 'United States of America',
//     },
//   ],
//   release_date: '2023-05-04',
//   tagline: 'Destiny has a plan.',
//   vote_average: 6.1,
// };
// {
//   /* `<li>${ item.name }</li>` */
// }
