import photo from '../assets/img/photo.jpg';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <h3 className="footer__title">Разработано Mitrofan Corporation</h3>
      <ul className="footer__list">
        <li className="footer__item">
          <h4 className="footer__description">О разработчике:</h4>
          <div className="footer__wrapper">
            <img
              className="footer__avatar"
              src={photo}
              width="56"
              height="56"
              alt="Фото разработчика."></img>
            <p className="footer__text">
              Митрофанова Анастасия<br></br>Фронтенд-разработчик
            </p>
          </div>
        </li>
        <li className="footer__item">
          <a
            href="https://mitrofanna.github.io/creative_scroll/"
            className="footer__social-link footer__portfolio">
            портфолио
          </a>
          <a href="https://github.com/Mitrofanna" className="footer__social-link">
            github
            <svg
              className="footer__github"
              aria-hidden="true"
              focusable="false"
              fill="#282828"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px">
              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
            </svg>
          </a>
        </li>
        <li>
          <h4 className="footer__description">Контакты:</h4>
          <p className="footer__social footer__mail">mitrofanovaa70@gmail.com</p>
          <p className="footer__social">+7(999)9754413</p>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
