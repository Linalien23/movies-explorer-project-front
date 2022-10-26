import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Form from '../Form/Form.js';
import logo from '../../images/logo.svg';
import './Register.css';

function Register({ onSubmit, isErrorMessage }) {

    const { register, formState: { errors, isValid }, handleSubmit } = useForm({ mode: 'onChange' });

    function submit(data) {
        onSubmit(data);
    }

    return (
        <section className='register'>
            <Link to='/'>
                <img className="header__logo" src={logo} alt="лого" />
            </Link>

            <h1 className='register__title'>Добро пожаловать!</h1>

            <Form onSubmit={handleSubmit(submit)}>
                <label className='form__label' htmlFor='name'> Имя </label>
                <input className='form__input'
                    type='text'
                    name='name'
                    id='name'
                    {...register('name', {
                        required: true,
                        pattern: /[a-zа-яё ]/i,
                        minLength: 2,
                        maxLength: 30
                    })} />

                <span className='form__input-error-text'>
                    {errors.name?.type === "required" && "Поле обязательно для заполнения"}
                    {errors.name?.type === "pattern" && "Введены недопустимые символы"}
                    {errors.name?.type === "minLength" && "Введите не менее 2-х символов"}
                    {errors.name?.type === "maxLength" && "Введено максимальное количество символов"}
                </span>

                <label className='form__label' htmlFor='email'>E-mail</label>
                <input className='form__input'
                    type='email'
                    name='email'
                    id='email'
                    {...register('email', {
                        required: true,
                        pattern: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,})\.([A-z]{2,8})/
                    })} />
                <span className='form__input-error-text'>
                    {errors.email?.type === "required" && "Поле обязательно для заполнения"}
                    {errors.email?.type === "pattern" && "Введены недопустимые символы"}
                </span>

                <label className='form__label' htmlFor='password'>Пароль</label>
                <input className='form__input'
                    type='password'
                    required
                    name='password'
                    id='password'
                    {...register('password', { required: true })} />
                <span className='form__input-error-text'>{errors.password?.type === "required" && "Поле обязательно для заполнения"} </span>

                <span className={'form__submit-error' + (isErrorMessage ? ' form__submit-error_visible' : '')}>Произошла ошибка</span>

                <button disabled={!isValid} className={'form__btn form__btn-register' + (!isValid ? ' form__btn_disabled' : '')} type='submit'>Зарегистрироваться</button>
            </Form>

            <p className="register__text">Уже зарегистрированы?
                <Link to='signin' className="register__link">Войти</Link>
            </p>
        </section>
    )
}

export default Register;