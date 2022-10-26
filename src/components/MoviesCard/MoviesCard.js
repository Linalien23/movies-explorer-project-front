import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {

    const location = useLocation();

    const time = () => { // длительность короткометражного фильма рассчитывается на основе поля duration
        const hours = Math.floor(props.duration / 60);
        const minutes = props.duration % 60;
        return `${hours + 'ч' + minutes + 'м'}`
    }

    return (
        <li className='moviesCard'>
            <a href={props.trailerLink} target='blank' className='moviesCard__link'> // ссылка на трейлер — в trailerLink
                <img className='moviesCard__image' src={props.image} alt={props.nameRu} />
            </a>
            <div className='moviesCards__information'>
                <h2 className='moviesCard__title'>{props.nameRU}</h2> // название фильма на русском языке находится в свойстве nameRU
                <p className='moviesCard__description'>{`${time()}`}</p>
            </div>


            {(location.pathname === '/movies') ? (
                <button className={`${props.isSavedMovie(props.movie) ? 'moviesCard__btn_active' : 'moviesCard__btn'}`}

                    type='submit'
                    onClick={() => props.handleAction(props.movie)}>
                </button>
            ) : (
                <button className='moviesCard__deleteBtn'
                    type='submit'
                    onClick={() => props.onDeleteMovie(props.movie)} />
            )}

        </li>
    );
}

export default MoviesCard;