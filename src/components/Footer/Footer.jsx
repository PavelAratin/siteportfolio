import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <ul className="social-list">
          <li className="social-list__item">
            <a href="#" className="social-list__link social-list__link--vk"></a>
          </li>
          <li className="social-list__item">
            <a
              href="#"
              className="social-list__link social-list__link--whatsap"
            ></a>
          </li>
          <li className="social-list__item">
            <a
              href="#"
              className="social-list__link social-list__link--telegram"
            ></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
