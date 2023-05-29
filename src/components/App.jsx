import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { StyledLink, Hedder, APP, Nav } from './App.styled';
import { StyledSection } from './Section/Section';
import Loader from './Loader/Loader';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const SearchBar = lazy(() => import('./SearchBar/SearchBar'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));


export const App = () => {
  return (
    <APP>
      <Hedder>
        <Nav>
          <StyledLink to="./">Home</StyledLink>
          <StyledLink to="./movies">Movies</StyledLink>
        </Nav>
      </Hedder>
      <Suspense >
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
          ></Route>
          <Route
            path="/movies/:movieId"
            element={
              <StyledSection>
                <MovieDetails />
              </StyledSection>
            }
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </APP>
  );
};
