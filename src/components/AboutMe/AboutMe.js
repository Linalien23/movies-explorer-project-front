import React from 'react';
import './AboutMe.css';
import photo from '../../images/photo.jpeg';

function AboutMe () {
    return (
        <section className='aboutMe' id='aboutMe'>
            <h3 className='main__section-title'>Студент</h3>
            <hr className="main__line"></hr>

            <div className='aboutMe__content'>
                <div className='aboutMe__textContent'>
                    <h2 className='aboutMe__title'>Алина</h2>
                    <p className='aboutMe__description'>QA-инженер, 29 лет</p>

                    <p className='aboutMe__text'>Привет! Я Алина, тестировщик команды разработки мобильного приложения Яндекс.Практикум, город Москва.
                    Занимаюсь тестированием около пяти лет, 2,5 из которых работаю на образовательных проектах Яндекса. Однажды я почувствовала острую необходимость 
                    говорить с разработчиками "на одном языке", глубже погрузиться в процесс создания продукта и прокачать свои технические скиллы. Мой выбор пал на курс 
                    веб-разработчика, так как его программа с лихвой удовлетворяет моим потребностям. Надеюсь, в ближайшем будущем изученный на курсе JS поможет мне начать писать автотесты. </p>
                    <a href="https://github.com/Linalien23" target="_blank" className='aboutMe__link' rel="noreferrer">Github</a>
                </div>
                
                <img  className='aboutMe__foto' src={photo} alt="фото"/>
                
            </div>

        </section>
    )
}

export default AboutMe;