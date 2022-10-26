import React from 'react';
import {useHistory} from 'react-router-dom';
import './NotFound.css';

function NotFound () {

    const history = useHistory();

    function goBackToPreviousPage () {
        history.goBack()
    }

    return (
        <div className="notFound">
            <div className = "notFound__container">
                <h2 className="notFound__title">404</h2>     
                <p className="notFound__text">Страница не найдена</p>
            </div>
            <button onClick = {()=> goBackToPreviousPage()} className = "notFound__link">Назад</button>
        </div>
    );
}

export default NotFound;