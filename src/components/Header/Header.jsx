import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = ({ displayMobileMenuHandler }) => {
  const [tehemeToggle, setThemeToggle] = useState(false);
  const [themeBody, setThemeBody] = useState("dark");
  const themeToggleHandler = () => {
    setThemeToggle(!tehemeToggle);
    setThemeBody(themeBody === "dark" ? "light" : "dark");
  };
  const burgerClickHandler = () => {
    displayMobileMenuHandler();
  };
  useEffect(() => {
    document.body.setAttribute("data-theme", themeBody);
  }, [themeBody]);
  return (
    <header className="header">
      <div className="container">
        <div className="nav-container">
          <button className="burger" onClick={burgerClickHandler}>
            <span className="burger__line burger__line--top"></span>
            <span className="burger__line burger__line--middle"></span>
            <span className="burger__line burger__line--bottom"></span>
          </button>
          <NavLink to="/" className="logo">
            Сайт портфолио
          </NavLink>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/projects" className="nav__link">
                  Мои работы
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/skills" className="nav__link">
                  Навыки
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/contacts" className="nav__link">
                  Контакты
                </NavLink>
              </li>
            </ul>
          </nav>
          <button
            className={`theme-toogle ${tehemeToggle ? "light" : "dark"}`}
            onClick={themeToggleHandler}
          >
            <img
              className="theme-toogle__sun"
              src="/images/Sun.svg"
              alt="Светлая тема"
            ></img>
            <img
              className="theme-toogle__sun"
              src="/images/Moon.svg"
              alt="Темная тема"
            ></img>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
