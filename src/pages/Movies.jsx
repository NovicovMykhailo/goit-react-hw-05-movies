import SearchBar from 'components/SearchBar/SearchBar';

const Movies = ({ children }) => {
  return (
    <div>
      <SearchBar />
      <div>{children}</div>
    </div>
  );
};
export default Movies;
