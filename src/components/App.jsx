import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import { StyledLink, Hedder, APP, Nav } from './App.styled';
import SearchBar from './Filter/SearchBar';
import {StyledSection} from './Section/Section';
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
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={
            <Movies>
              <StyledSection>
                <SearchBar />
              </StyledSection>
            </Movies>
          }
        >
          <Route path=":movieId">
            <Route path="cast" />
            <Route path="reviews" />
          </Route>
        </Route>
      </Routes>
    </APP>
  );
};
