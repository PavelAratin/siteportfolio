import { useState } from "react";
import "./Header.scss";

const Header = ({displayMobileMenuHandler}) => {
  const [tehemeToggle, setThemeToggle] = useState(false);
  const themeToggleHandler = () => {
    setThemeToggle(!tehemeToggle);
  };
  const burgerClickHandler = () => {
    displayMobileMenuHandler()
  };
  return (
    <header className="header">
      <div className="container">
        <div className="nav-container">
          <button className="burger" onClick={burgerClickHandler}>
            <span className="burger__line burger__line--top"></span>
            <span className="burger__line burger__line--middle"></span>
            <span className="burger__line burger__line--bottom"></span>
          </button>
          <a href="#" className="logo">
            Сайт портфолио
          </a>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="nav__link active">
                  Мои работы
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Навыки
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
          <button
            className={`theme-toogle ${tehemeToggle ? "dark" : "light"}`}
            onClick={themeToggleHandler}
          >
            <img
              className="theme-toogle__sun"
              src="/images/sun.svg"
              alt="Светлая тема"
            ></img>
            <img
              className="theme-toogle__sun"
              src="/images/moon.svg"
              alt="Темная тема"
            ></img>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
