import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import { 
  largeScreen, 
  middleScreen, 
  smallScreen, 
  countOfMoviesOnDesktop, 
  countOfMoviesOnProTab, 
  countOfMoviesOnTab, 
  countOfMoviesOnPhone } from '../../utils/constants.js';

function MoviesCardList({ movieCards, className, isLoad, isSavedMovie, onDeleteMovie, handleAction }) {

  const [moviesOnDisplay, setMoviesOnDisplay] = useState(0);

  const [display, setDisplay] = useState(window.innerWidth);

  const loadMovieCards = () => {
    if (display > middleScreen) { 
      setMoviesOnDisplay(12);
    } else if (display <= middleScreen && display >= smallScreen) { // Ширина 768px — 8 карточек по 2 в ряд
      setMoviesOnDisplay(8);
    } else if (display <= smallScreen) { // Ширина от 320px до 480px — 5 карточек по 1 в ряд
      setMoviesOnDisplay(5);
    }
  }

  useEffect(() => {
    loadMovieCards()
  }, [])

  window.resize = function () {
    setTimeout(() => {
      loadMovieCards()
      setDisplay(window.innerWidth)
    }, 500)
  }

  const loadMoreMoviesCards = () => {
    if (display > largeScreen) {
      setMoviesOnDisplay(moviesOnDisplay + countOfMoviesOnDesktop)
    } else if (display <= largeScreen && display >= middleScreen) {
      setMoviesOnDisplay(moviesOnDisplay + countOfMoviesOnProTab)
    } else if (display <= middleScreen && display >= smallScreen) {
      setMoviesOnDisplay(moviesOnDisplay + countOfMoviesOnTab)
    } else if (display <= smallScreen) {
      setMoviesOnDisplay(moviesOnDisplay + countOfMoviesOnPhone)
    }
  }

  return (
    <section className={'movieCardList' + (isLoad ? ' movieCardList_hidden' : '')}>
      <ul className='movieCardList__elements'>

        {movieCards.slice(0, moviesOnDisplay).map((movie) => (
          <MoviesCard
            key={movie.movieId || movie.id}
            id={movie.id}
            movieId={movie.movieId}
            country={movie.country}
            image={movie.image}
            description={movie.description}
            duration={movie.duration}
            nameRU={movie.nameRU}
            className={className}
            trailerLink={movie.trailerLink}
            thumbnail={movie.thumbnail}
            movie={movie}
            isSavedMovie={isSavedMovie}
            onDeleteMovie={onDeleteMovie}
            handleAction={handleAction}>
          </MoviesCard>
        ))}

      </ul>

      {(movieCards.length > moviesOnDisplay || movieCards.length < !3) ? (
        <section className='movies__more'>
          <button className='movies__more-btn' type='button' onClick={loadMoreMoviesCards}>Ещё</button>
        </section>
      ) : null}

    </section>
  );
}

export default MoviesCardList;