import { DateFormat, formatUrl, ratingConvert, formatAvatar } from '../../services/utils';
import css from './ReviewCard.module.css'

const ReviewCard = ({ review }) => {
  const { content, created_at, url, author_details } = review;
  const { username, avatar_path, rating } = author_details;

     return (
       <li className={css.card}>
         <div className={css.userAvatar}>
           <h3> {username} </h3>
           <div className={css.userInfo}>
             <img className={css.image} src={formatAvatar(avatar_path)} alt="Avatar" width="80" />
             <ul className={css.stats}>
               <li>{rating !== null && `Rating: ${ratingConvert(rating)}`}</li>
               <li>Created: {DateFormat(created_at)}</li>
             </ul>
           </div>
         </div>
         <a href={formatUrl(url)} target="blank">
           <p className={css.content}>{content}</p>
         </a>
       </li>
     );

 
 
   
};
export default ReviewCard;

// const obj = {
//   author_details: {
//     name: '',
//     username: 'thealanfrench',
//     avatar_path: '/https://secure.gravatar.com/avatar/23f2cd16e6fafdf013b30ccc22e2e4c8.jpg',
//     rating: null,
//   },
//   content:
//     'Check out the full spoiler free review at Sunshine State Cineplex. \r\nhttps://sunshinestatecineplex.com/2023/03/13/sxsw-2023-john-wick-chapter-4-2023/\r\n\r\nJohn Wick: Chapter 4 might be a little long, but when it is fun, there are few films that can compete with its magnetism. Reeves shows why he’s one of the best genre actors in the world and pours his heart and soul into a soft-spoken performance. Combined with Stahelski’s fight sequences, this is sure to become a highly rewatched, often quoted classic.',
//   created_at: '2023-03-15T05:13:49.138Z',
//   id: '6411540dfe6c1800bb659ebd',
//   updated_at: '2023-03-24T22:19:13.344Z',
//   url: 'https://www.themoviedb.org/review/6411540dfe6c1800bb659ebd',
// };



