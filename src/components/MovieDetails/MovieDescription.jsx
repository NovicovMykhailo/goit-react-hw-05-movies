import css from './MovieDetails.module.css';
import { DateFormat, ToStringConverter, year } from '../../services/utils';
import { Link } from 'react-router-dom';

const MovieDescription = ({info}) => {

  const {
    title,
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
      <div className={css.posterContainer}>
        <a rel="stylesheet" href={homepage} className={css.posterLink}>
          <img
            className={css.posterImage}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={original_title}
            loading="lazy"
            width="400"
            max-height="709"
          />
        </a>
        <p className={css.locations}>{ToStringConverter(production_countries)}</p>
      </div>
      <aside>
        <div className={css.topAside}>
          <h2>
            {title} ( {year(release_date)} )
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
            <li>
              Release Date:
              <p>{DateFormat(release_date)}</p>
            </li>

            <li>
              Vote Average:
              <p>{Number.parseFloat(vote_average).toFixed(1)}</p>
            </li>

            <li>
              User Score:
              <p>{Number.parseFloat(popularity).toFixed(1)}</p>
            </li>
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
    </>
  );
};

export default MovieDescription;
