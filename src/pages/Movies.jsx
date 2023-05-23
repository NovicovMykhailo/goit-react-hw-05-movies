import SearchBar from 'components/Filter/SearchBar';

const Movies = ({ children }) => {
  return (
    <div>
      <SearchBar />
      <div>{children}</div>
    </div>
  );
};
export default Movies;
