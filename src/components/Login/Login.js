import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Form from '../Form/Form.js'
import logo from '../../images/logo.svg';
import './Login.css';

function Login({ onSubmit }) {

    const { register, formState: { errors, isValid }, handleSubmit } = useForm({ mode: 'onChange' });

    function submit(data) {
        onSubmit(data);
    }

    return (
        <section className='login'>
            <Link to='/'>
                <img className='header__logo' src={logo} alt='лого' />
            </Link>

            <h1 className='login__title'>Рады видеть!</h1>

            <Form onSubmit={handleSubmit(submit)}>

                <label className='form__label' htmlFor='email'> E-mail </label>
                <input className='form__input'
                    type='email'
                    name='email'
                    id='email'
                    {...register('email', {
                        required: true,
                        pattern: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,})\.([A-z]{2,8})/
                    })} />
                <span className='form__input-error-text'>
                    {errors.email?.type === 'required' && 'Поле обязательно для заполнения'}
                    {errors.email?.type === 'pattern' && 'Введены недопустимые символы'}
                </span>


                <label className='form__label' htmlFor='password'> Пароль </label>
                <input className='form__input'
                    type='password'
                    name='password'
                    id='password'
                    {...register('password', { required: true })} />
                <span className='form__input-error-text'>{errors.password?.type === 'required' && 'Поле обязательно для заполнения'}</span>

                <button disabled={!isValid} className={'form__btn form__btn-login' + (!isValid ? ' form__btn_disabled' : '')} type='submit'>Войти</button>
            </Form>

            <p className='login__text'>Ещё не зарегистрированы?
                <Link to='signup' className='login__link'>Регистрация</Link>
            </p>
        </section>
    )
}

export default Login;