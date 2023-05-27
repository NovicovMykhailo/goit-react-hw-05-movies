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




