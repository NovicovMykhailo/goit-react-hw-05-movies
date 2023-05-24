

const { useParams } = require('react-router-dom')

const MoviePoster = () => {
    const {movieId} = useParams()
    return <h2>Movie Poster {movieId}</h2>;
}
export default MoviePoster