import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import { StyledLink, Hedder, APP, Nav } from './App.styled';
import SearchBar from './Filter/SearchBar';
import { StyledSection } from './Section/Section';
import MoviePoster from './MoviePoster/MoviePoster';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
// import * as API from '../services/themoviedb_API'

export const App = () => {
  return (
    <APP>
      <Hedder>
        <Nav>
          <StyledLink to="./">Home</StyledLink>
          <StyledLink to="./movies">Movies</StyledLink>
        </Nav>
      </Hedder>

      <Routes>
        <Route
          path="/"
          element={
            <StyledSection>
              <Home />
            </StyledSection>
          }
        />
        <Route
          path="/movies"
          element={
            <Movies>
              <StyledSection>
                <SearchBar />
              </StyledSection>
            </Movies>
          }
        ></Route>
        <Route
          path="/movies/:movieId"
          element={
            <StyledSection>
              <MoviePoster />
            </StyledSection>
          }
        >
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
      </Routes>
    </APP>
  );
};
