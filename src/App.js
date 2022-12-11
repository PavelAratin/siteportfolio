import 'normalize.css';
import React from 'react';
import './App.scss';

function App() {
  return (
    <header className='header'>
      <div className="container">
        <div className="nav-container">
          <a href="#" className="logo">Сайт портфолио</a>
          <nav className="nav">
            <ul className='nav__list'>
              <li className='nav__item'><a href="#" className="nav__link active">Мои работы</a></li>
              <li className='nav__item'><a href="#" className="nav__link">Навыки</a></li>
              <li className='nav__item'><a href="#" className="nav__link">Контакты</a></li>
            </ul>
          </nav>
          <button className='theme-toogle'>
          <img className='theme-toogle__sun' src='/images/sun.svg' alt='Светлая тема'></img>
          <img className='theme-toogle__sun' src='/images/moon.svg' alt='Темная тема'></img>
        </button>
        </div>
      </div>
    </header>
  );
}

export default App;
