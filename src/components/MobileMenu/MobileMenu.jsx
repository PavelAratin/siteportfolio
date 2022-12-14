import "./MobileMenu.scss";
import { useRef } from "react";

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
      <button className="burger-close" onClick={clickHandler}>
        <span className="burger-close__line burger-close__line--top"></span>
        <span className="burger-close__line burger-close__line--bottom"></span>
      </button>
    </div>
  );
};

export default MobileMenu;
