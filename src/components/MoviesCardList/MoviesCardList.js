import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import { CountOfMoviesOnPC, CountOfMoviesOnPhone } from '../../utils/constants.js';

function MoviesCardList({ movieCards, className, isLoad, isSavedMovie, onDeleteMovie, handleAction }) {

  const [moviesOnDisplay, setMoviesOnDisplay] = useState(0);

  const [display, setDisplay] = useState(window.innerWidth);

  function loadMovieCards() {

    if (display > 1006) { // Ширина 1280px — 12 карточек по 3 в ряд
      setMoviesOnDisplay(12);
    } else if (display > 750) { // Ширина 768px — 8 карточек по 2 в ряд
      setMoviesOnDisplay(8);
    } else if (display < 750) { // Ширина от 320px до 480px — 5 карточек по 1 в ряд
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

  function loadMoreMoviesCards() {
    if (display > 1006) {
      setMoviesOnDisplay(moviesOnDisplay + CountOfMoviesOnPC)
    } else if (display > 750) {
      setMoviesOnDisplay(moviesOnDisplay + CountOfMoviesOnPhone)
    } else if (display < 750) {
      setMoviesOnDisplay(moviesOnDisplay + CountOfMoviesOnPhone)
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

      {(movieCards.length > moviesOnDisplay || movieCards.length < !3) ? ( // Если карточек больше трёх, под ними появляется кнопка «Ещё»
        <section className='movies__more'>
          <button className='movies__more-btn' type='button' onClick={() => loadMoreMoviesCards()}>Ещё</button>
        </section>
      ) : null}

    </section>
  );
}

export default MoviesCardList;