import CardItem from 'components/CardItem/CardItem';
import { useEffect, useState } from 'react';
import * as API from '../services/themoviedb_API';
import Gallery from 'components/Gallery/Gallery';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('ide');
 const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setStatus('pending');
      API.getTrendingMovies().then(res => {
        setMovies(res);
        setStatus('resolved');
      });
    } catch (error) {
      setStatus('rejected');
      setError(error);
    }
  }, []);

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <Error message={error} />}
      
      {status === 'resolved' && (
        <Gallery>
          {movies.map(item => (
            <CardItem data={item} key={item.id} />
          ))}
        </Gallery>
      )}
    </>
  );
};
export default Home;
