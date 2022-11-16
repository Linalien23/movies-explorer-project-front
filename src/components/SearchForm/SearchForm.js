import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import FilterCheckBox from '../FilterCheckbox/FilterCheckBox';
import magnifier from '../../images/magnifier.svg';
import './SearchForm.css';

function SearchForm({ searchMovie, movies, onShort, isShort }) {

    const [newValue, setNewValue] = useState(localStorage.getItem('text') || '');

    const location = useLocation();

    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: 'onChange'
    });

    function onSubmit(data) {
        searchMovie(data.text, movies)
        if (location.pathname === '/movies') {
            localStorage.setItem('text', data.text)
        }
    }

    // const checkKeyDown = (e) => {
    //     if (e.code === 'Enter') {
    //         e.preventDefault();
    //         handleSubmit(onSubmit)();
    //     }
    // };

    function handleChangeValue(e) {
        setNewValue(e.target.value);
    }

    return (
        <section className='searchForm'>
            <form className='searchForm__Form' onSubmit={handleSubmit(onSubmit)} noValidate>
                <img className='searchForm__img-mag' src={magnifier} alt='Лупа' />
                <input className='searchForm__input'
                    placeholder='Фильм'
                    type='text'
                    name='search'
                    {...register('text', {
                        required: 'Введите ключевое слово',
                        value: location.pathname === '/movies' ? newValue : ''
                    })}
                    onChange={(e) => handleChangeValue(e)} ></input>
                <button className='searchForm__btn' type='submit'></button>
                <span className='searchForm__input-error-text'>{errors.text?.message}</span>
            </form>

            <FilterCheckBox onShort={onShort}
                searchMovie={searchMovie}
                movies={movies}
                isShort={isShort}
                text={newValue} />
        </section>
    )
}

export default SearchForm;