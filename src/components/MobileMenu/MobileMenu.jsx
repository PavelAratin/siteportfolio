import "./MobileMenu.scss";
import { useRef } from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ displayMobileMenu,displayMobileMenuHandler }) => {
  const mobileMenuEl = useRef(null)
  const clickHandler = ()=>{
    mobileMenuEl.current.classList.remove('active')
    displayMobileMenuHandler()
  }
  return (
    <div className={`mobile-menu ${displayMobileMenu ? "active" : ""}`} ref={mobileMenuEl}>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/projects" className="nav__link active">
              Мои работы
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/skills" className="nav__link">
              Навыки
            </Link>
          </li>
          <li className="nav__item">
            <Link to='/contacts' href="#" className="nav__link">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
      <button className="burger-close" onClick={clickHandler}>
        <span className="burger-close__line burger-close__line--top"></span>
        <span className="burger-close__line burger-close__line--bottom"></span>
      </button>
    </div>
  );
};

export default MobileMenu;
