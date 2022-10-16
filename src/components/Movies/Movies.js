import React from 'react';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
;

function Movies () {
    
    return (
        <section>
           
            <SearchForm />

            <Preloader />

            <MoviesCardList className={'moviesCard__btn'}/>

            <section className='movies__more'>
                <button className='movies__more-btn' type='button'>Ещё</button>
            </section>

        </section>
    );
}

export default Movies;