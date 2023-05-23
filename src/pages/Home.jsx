import CardItem from 'components/CardItem/CardItem';
import { useEffect, useState } from 'react';
import * as API from '../services/themoviedb_API';
import Gallery from 'components/Gallery/Gallery';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
       API.getTrendingMovies().then(res => setMovies(res));

      

    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Gallery>
        {movies.map(item => (
          <CardItem data={item} key={item.id} />
        ))}
      </Gallery>
    </>
  );
};
export default Home;
