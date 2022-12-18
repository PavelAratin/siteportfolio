import './ContactsPages.scss';

const ContactsPages = () => {
  return (
    <div className='contacts'>
      <div className="container">
        <h1 className='title contacts__title'>Контакты</h1>
        <h3 className='contacts__min-title'>Адресс</h3>
        <p className='contacts__description'>Смоленска область , город Гагарин</p>
        <h1 className='title contacts__min-title'>Telegram/Whatsap</h1>
        <a href="tel:+79621944028" className='contacts__link contacts__link--margin-bottom'>8-962-194-40-28</a>
        <h1 className='title contacts__min-title'>Email</h1>
        <a href="mailto:paha_gagarin@mail.ru" className='contacts__link'>paha_gagarin@mail.ru</a>
      </div>
    </div>
  )
}


export default ContactsPages;