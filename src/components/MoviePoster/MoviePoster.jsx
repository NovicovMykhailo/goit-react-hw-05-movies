import { useEffect, useState } from 'react';
import * as API from '../../services/themoviedb_API';
import css from './MoviePoster.module.css';
import { DateFormat, ToStringConverter, numToFix, year } from '../../services/utils';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { useParams, Outlet, Link, useNavigate } from 'react-router-dom';
import bgPlaceholder from '../../images/poster_bg.jpg';

const MoviePoster = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
    if (bg === null) {
      return `url( ${bgPlaceholder})`;
    }

    if (bg) {
      return `url(https://image.tmdb.org/t/p/original/${bg})`;
    }
  };

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

    return (
      <>
        <article className={css.poster}>
          <button className={css.goBackBtn} onClick={() => navigate(-1)}></button>
          {<div className={css.BG} style={{ backgroundImage: bgNormalize(backdrop_path) }}></div>}

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
            <p className={css.locations}>{ToStringConverter(production_countries)}</p>
          </div>
          <aside>
            <div className={css.topAside}>
              <h2>
                {original_title} ( {year(release_date)} )
              </h2>
              <p>{tagline}</p>

              <div>
                <h4>Genres: </h4>
                <p>{ToStringConverter(genres)}</p>
              </div>

              <h4>Overview: </h4>
              <p className={css.overview}>{overview}</p>
            </div>

            <div className={css.bottomAside}>
              {production_companies.length >= 1 && (
                <>
                  <h4>Production Companies:</h4>
                  <ul className={css.companies} data-list>
                    {production_companies.map(({ name, logo_path, origin_country, id }) => {
                      if (logo_path !== null) {
                        return (
                          <li key={id} className="company">
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
                </>
              )}
              <h4>Statistics: </h4>
              <ul className={css.stats}>
                {release_date && (
                  <li>
                    Release Date:
                    <p>{DateFormat(release_date)}</p>
                  </li>
                )}

                {vote_average && (
                  <li>
                    Vote Average:
                    <p>{vote_average}</p>
                  </li>
                )}
                {popularity && (
                  <li>
                    User Score:
                    <p>{Number.parseFloat(popularity).toFixed(1)}</p>
                  </li>
                )}
              </ul>
            </div>
            <div className={css.additional}>
              <h3 style={{ textAlign: 'center' }}>Additional Information</h3>
              <ul className={css.buttonContainer}>
                <li className={css.Links}>
                  <Link to="cast" className={css.linkItem}>
                    Cast
                  </Link>
                </li>
                <li className={css.Links}>
                  <Link to="reviews" className={css.linkItem}>
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </article>
        <div className={css.outletContainer}>
          <Outlet />
        </div>
      </>
    );
  }
};
export default MoviePoster;
