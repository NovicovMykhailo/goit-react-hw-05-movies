import { Link } from 'react-router-dom';
import css from './CardItem.module.css';
import placeholder from '../../images/200x300placeholder.jpg'

import { DateFormat, numToFix } from '../../services/utils';

const CardItem = ({ data }) => {
  const { id, poster_path, title, overview, release_date, popularity } = data;
  if (poster_path) {
    return (
      <li title={title} className={css.card}>
        <Link to={`/movies/${id}`}>
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

// const obj = {
//   id: 920125,
//   title: "White Men Can't Jump",
//   overview:
//     'Seemingly opposite street hoopers, Jeremy, an injury prone former star, and Kamal, a has-been prodigy, team up to take one final shot at living out their dreams.',
//   poster_path: '/7MUQMSncjUSYeNx0ZAgFCxhlPhv.jpg',
//   popularity: 86.503,
//   release_date: '2023-05-11',
//   vote_average: 6.37,
//   vote_count: 54,
// };
