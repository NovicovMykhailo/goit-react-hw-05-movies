import { Suspense, lazy, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { StyledLink, Hedder, APP, Nav } from './App.styled';
import { StyledSection } from './Section/Section';
import Loader from './Loader/Loader';
import ModalCard from './Modal/ModalCard';
import Modal from './Modal/Modal';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const SearchBar = lazy(() => import('./SearchBar/SearchBar'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  const [isModal, setIsModal] = useState(null);
  const navigate = useNavigate;


  function onClose() {
    setIsModal(false);
    navigate(-1);
  }

  return (
    <APP>
      <Hedder>
        <Nav>
          <StyledLink to="./">Home</StyledLink>
          <StyledLink to="./movies">Movies</StyledLink>
        </Nav>
      </Hedder>
      <Suspense fallback={<Loader />}>
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
            <Route path="cast" element={<Cast />}></Route>
            <Route
              path="cast/:actorId"
              element={
                isModal && (
                  <Modal onClose={onClose} onOpen={setIsModal}>
                    <ModalCard />
                  </Modal>
                )
              }
            />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </APP>
  );
};
