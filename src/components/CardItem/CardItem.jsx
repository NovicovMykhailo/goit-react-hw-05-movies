import { Link } from 'react-router-dom';
import css from './CardItem.module.css';
import placeholder from '../../images/200x300placeholder.jpg'

import { DateFormat, numToFix } from '../../services/utils';

const CardItem = ({ data, state }) => {
  const { id, poster_path, title, overview, release_date, popularity } = data;
  if (poster_path) {
    return (
      <li title={title} className={css.card}>
        <Link to={`/movies/${id}`} state={state}>
          <div className={css.description}>
            <ul className={css.stats}>
              {popularity && <li>Views: {numToFix(popularity)}</li>}
              {release_date && <li>{DateFormat(release_date)}</li>}
            </ul>
          </div>
          <img
            className={css.image}
            src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : placeholder}
            alt="{title}"
            loading="lazy"
          />

          <p className={css.overview}>{overview}</p>
        </Link>
      </li>
    );
  
}
  
};

export default CardItem;
