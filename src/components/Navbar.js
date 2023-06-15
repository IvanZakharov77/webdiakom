import { useState } from 'react';
import insta from '../images/insta.svg';
import facebook from '../images/facebook.svg';
import phone from '../images/phone.svg';
import telegram from '../images/telegram.svg';
import viber from '../images/viber.svg';

const Navbar = () => {
  const [scroll, setScroll] = useState(0);

  return (
    <div className="navbar">
      <div className="navbar-item">
        <div className="nav-logo">WebDIAKOM</div>
        <div className="nav-icon">
          <a href="#" alt="call icon" title="Позвонить нам" aria-label="Позвонить нам">
            <img src={phone} alt="call" />
          </a>
          <a
            href="#"
            alt="telegram icon"
            title="Перейти в telegram"
            aria-label="Перейти в telegram"
          >
            <img src={telegram} alt="telegram" />
          </a>
          <a href="#" alt="viber icon" title="Перейти в viber" aria-label="Перейти в viber">
            <img src={viber} alt="viber" />
          </a>
          <a
            href="#"
            alt="facebook icon"
            title="Перейти в facebook"
            aria-label="Перейти в facebook"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="#"
            alt="instagram icon"
            title="Перейти в instagram"
            aria-label="Перейти в instagram"
          >
            <img src={insta} alt="istagram" />
          </a>
        </div>
      </div>
      <div className="navbar-linc">
        <div>про нас</div>
        <div>розробка</div>
        <div>дизайни</div>
        <div>контакти</div>
      </div>
    </div>
  );
};

export default Navbar;
