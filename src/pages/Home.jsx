import CardItem from 'components/CardItem/CardItem';
import { useEffect, useState } from 'react';
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
        <StyledSection title={"Gallery"}>
          <Gallery>
            {movies.map(item => (
              <CardItem data={item} key={item.id} />
            ))}
          </Gallery>
        </StyledSection>
      )}
    </>
  );
};
export default Home;
