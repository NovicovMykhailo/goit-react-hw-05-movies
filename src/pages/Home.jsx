import CardItem from 'components/CardItem/CardItem';
import { Suspense, useEffect, useState } from 'react';
import * as API from '../services/themoviedb_API';
import Gallery from 'components/Gallery/Gallery';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { StyledSection } from 'components/Section/Section';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('ide');
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setStatus('pending');
      try {
        await API.getTrendingMovies().then(res => {
          setMovies(res);
          setStatus('resolved');
        });
      } catch (error) {
        setStatus('rejected');
        setError(error);
      }
    })();
  }, []);

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <Error message={error} />}

      {status === 'resolved' && (
        <StyledSection title={'Gallery'}>
          <Gallery>
            <Suspense >
              {movies.map(item => (
                <CardItem data={item} key={item.id} state={{ from: '/' }} />
              ))}
            </Suspense>
          </Gallery>
        </StyledSection>
      )}
    </>
  );
};
export default Home;
