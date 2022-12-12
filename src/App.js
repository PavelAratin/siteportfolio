import 'normalize.css';
import React from 'react';
import './App.scss';
import { useState } from 'react';
function App() {
  const [burger, setBurger] = useState(false)
  const clickHandler = () => {
    console.log('click')
    setBurger(!burger)
  }
  return (
    <div className="site-container">
      <header className='header'>
        <div className="container">
          <div className="nav-container">
            <button className={`burger ${burger ? 'active' : null}`} onClick={clickHandler}>
              <span className='burger__line burger__line--top'></span>
              <span className='burger__line burger__line--middle'></span>
              <span className='burger__line burger__line--bottom'></span>
            </button>
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
      <main>
        <section className='hero'>
          <div className="hero__content">
            <h1 className='title hero__title'>Привет, меня зовут Павел</h1>
            <p className='hero__description'>Я FRONTEND разработчик</p>
            <a className='hero__link' href='#' download>Мое резюме на HeadHunter</a>
          </div>
        </section>
        <section className='project'>
          <div className="container">
            <h2 className='title project__title'>Мои работы</h2>
            <ul className="project__list">
              <li className='project__item'>
                <a href="#" className="project__link">
                  <img className='project__img' src='images/project1.jpg' alt='Первый проет Магазин игр на Реакт'></img>
                  <h2 className='title project__img-title'>Магазин игр на REACT JS</h2>
                </a>
              </li>
              <li className='project__item'>
                <a href="#" className="project__link">
                  <img className='project__img' src='images/project2.jpg' alt='Приложение страны на Реакт'></img>
                  <h2 className='title project__img-title'>Приложение страны REACT JS</h2>
                </a>
              </li>
              <li className='project__item'>
                <a href="#" className="project__link"><img className='project__img' src='images/project3.jpg' alt='Дашборд на Реакт'></img>
                  <h2 className='title project__img-title'>Дашборд REACT JS</h2></a>
              </li>
              <li className='project__item'>
                <a href="#" className="project__link"><img className='project__img' src='images/project4.jpg' alt='Интернет магазин Самокатов'></img>
                  <h2 className='title project__img-title'>Интернет магазин Самокатов</h2></a>
              </li>
              <li className='project__item'>
                <a href="#" className="project__link"><img className='project__img' src='images/project5.jpg' alt='Лендинг BLANCHARD'></img>
                  <h2 className='title project__img-title'>Лендинг BLANCHARD</h2></a>
              </li>
              <li className='project__item'>
                <a href="#" className="project__link"><img className='project__img' src='images/project6.jpg' alt='Интернет магазин мебели'></img>
                  <h2 className='title project__img-title'>Интернет магазин мебели</h2></a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <div className="container footer__container">
          <ul className="social-list">
            <li className='social-list__item'>
              <a href="#" className="social-list__link social-list__link--vk"></a>
            </li>
            <li className='social-list__item'>
              <a href="#" className="social-list__link social-list__link--whatsap"></a>
            </li>
            <li className='social-list__item'>
              <a href="#" className="social-list__link social-list__link--telegram"></a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
