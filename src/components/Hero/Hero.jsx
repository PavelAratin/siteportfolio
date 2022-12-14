import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="title hero__title">Привет, меня зовут Павел</h1>
        <p className="hero__description">Я FRONTEND разработчик</p>
        <a className="hero__link" href="#" download>
          Мое резюме на HeadHunter
        </a>
      </div>
    </section>
  );
};

export default Hero;
