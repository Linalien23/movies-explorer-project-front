import React from 'react';
import FilterCheckBox from '../FilterCheckbox/FilterCheckBox';
import magnifier from '../../images/magnifier.svg';
import './SearchForm.css';

function SearchForm () {
    return(
        <section className='searchForm'>
            <form className='searchForm__Form'>
                <img className='searchForm__img-mag' src={magnifier} alt='Лупа'/>
                <input className='searchForm__input' type='text' name='search' placeholder='Фильм' required></input>
                <button className='searchForm__btn' type='submit'></button>
            </form>

            <FilterCheckBox />
        </section>
    )
}

export default SearchForm;