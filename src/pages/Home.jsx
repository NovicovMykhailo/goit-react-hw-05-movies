import CardItem from 'components/CardItem/CardItem';
import { useEffect, useState } from 'react';
import * as API from '../services/themoviedb_API';
import Gallery from 'components/Gallery/Gallery';
import  Loader  from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('ide');

  useEffect(() => {
    try {
      setStatus('pending');
      API.getTrendingMovies().then(res => {
        setMovies(res);
        setStatus('resolved');
      });
    } catch (error) {
      setStatus('rejected');
      console.log(error);
    }
  }, []);

  return (
    <>
      {status === 'pending' && <Loader />}
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
