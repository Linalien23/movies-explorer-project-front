import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Profile.css';
import { CurrentUserContext } from '../../context/CurrentUserContext.js';

function Profile(props) {

    const user = useContext(CurrentUserContext);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm({
        mode: 'onChange',
        defaultValues: {
          name: user.name,
          email: user.email
        }
      });

    const userName = useState(user.name);
    const email = useState(user.email);

    function submit(data) {
        if (data.name !== user.name || data.email !== user.email) {
            props.onUpdateUser({
                name: data.name,
                email: data.email,
            });
        } else {
            return !isValid
        }
    }
  
    const isDataNotChanged = user.name === userName && user.email === email;

    return (
        <section className="profile">

            <div className='profile__content'>
                <h1 className='profile__title'> Привет, {user.name}</h1>

                <form className='profile__edit-form' onSubmit={handleSubmit(submit)}>

                    <label className='profile__edit-form-label' htmlFor='name'>Имя</label>
                    <input className='profile__edit-form-input'
                        name='name'
                        type='text'
                        id='name'
                        {...register('name', {
                            required: true,
                            pattern: /[a-zа-яё ]/i,
                            minLength: 2,
                            maxLength: 30,
                            value: user.name
                        })}
                    />
                    <span className='profile__edit-form-input-text'>
                        {errors.name?.type === "required" && "Поле обязательно для заполнения"}
                        {errors.name?.type === "pattern" && "Введены недопустимые символы"}
                        {errors.name?.type === "minLength" && "Введите не менее 2-х символов"}
                        {errors.name?.type === "maxLength" && "Введено максимальное количество символов"}
                    </span>

                    <hr className='profile__info-line' />

                    <label className='profile__edit-form-label' htmlFor='email'>E-mail</label>
                    <input className='profile__edit-form-input'
                        name='email'
                        type='email'
                        id='email'
                        {...register('email', {
                            required: true,
                            value: user.email,
                            pattern: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,})\.([A-z]{2,8})/
                        })} />
                    <span className='profile__edit-form-input-text'>
                        {errors.email?.type === "required" && "Поле обязательно для заполнения"}
                        {errors.email?.type === "pattern" && "Введены недопустимые символы"}
                    </span>

                    <p className='profile__massage'> {props.message}</p>

                    <button disabled={!isValid || isDataNotChanged} className={'profile__edit-form-btn' + (!isValid || isDataNotChanged ? ' form__btn_disabled' : '')} type='submit'>Редактировать</button>

                </form>

                <button className='profile__exit-btn' type='button' onClick={() => props.onLogAut()}>Выйти из аккаунта</button>
            </div>
        </section>
    );
}

export default Profile;