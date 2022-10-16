import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'
import ButtonImage from '../../images/icon-main.svg';

function Navigation ({isOpen, onClose}) {
    return (
        <section className={'navigation' +  (isOpen?' navigation_visible':'')}>
            <div className="navigation__container">
                <nav className="navigation__links">
                    <Link to='/' className='navigation__link'>Главная</Link>
                    <Link to='/movies' className='navigation__link'>Фильмы</Link>
                    <Link to='saved_movies' className='navigation__link'>Сохраненные фильмы</Link>
                </nav>

                <Link className = 'navigation__btn' to='/profile'>
                    <img className='navigation__btn-icon' src={ButtonImage} alt='Профиль' />
                    <p className='navigation__btn-text'>Аккаунт</p>
                </Link>
                <button className='navigation__closebtn' onClick={onClose} type='button' />
            </div>    
        </section>
    )
}

export default Navigation;