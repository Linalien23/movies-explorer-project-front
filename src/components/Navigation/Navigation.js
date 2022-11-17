import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'
import ButtonImage from '../../images/icon-main.svg';

function Navigation ({isOpen, onClose}) {
    return (
        <section className={'navigation' +  (isOpen?' navigation_visible':'')}>
            <div className="navigation__container">
                <nav className="navigation__links">
                    <NavLink to='/' className='navigation__link' onClick={onClose}>Главная</NavLink>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'navigation__link.active' : 'navigation__link')}
                        to='/movies'
                        onClick={onClose}>Фильмы</NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'navigation__link.active' : 'navigation__link')}
                        to='/saved_movies'
                        onClick={onClose}>Сохраненные фильмы</NavLink>
                </nav>

                <NavLink to='/profile' className = 'navigation__btn' onClick={onClose}>
                    <img className='navigation__btn-icon' src={ButtonImage} alt='Профиль' />
                    <p className='navigation__btn-text'>Аккаунт</p>
                </NavLink>
                <button className='navigation__closeBtn' onClick={onClose} type='button' />
            </div>    
        </section>
    )
}

export default Navigation;