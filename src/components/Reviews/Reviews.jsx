import { useEffect, useState } from 'react';
import * as API from '../../services/themoviedb_API';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import ReviewCard from 'components/ReviewCard/ReviewCard';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
    try {
      API.getReviews(movieId).then(reviews => {
        setReviews(reviews);
        setStatus('resolved');
      });
    } catch (error) {
      setMessage(error);
      setStatus('rejected');
    }
  }, [movieId]);


  if (status === 'pending') return <Loader />;
  if (status === 'rejected') return <Error message={message} />;
  if (status === 'resolved') {
      if (reviews !== null && reviews.length === 0) {
        return (
          <h2 style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
            Sorry we can not find any reviews for this movie
          </h2>
        );
      }
    if (reviews) {
      return (
        <>
          <h3 className={css.title}>Reviews</h3>
          <ul className={css.reviewsList}>
            {reviews.map(review => {
              return <ReviewCard review={review} key={review.id} />;
            })}
          </ul>
        </>
      );
    }
  }

};

export default Reviews;

