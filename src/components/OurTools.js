import bootstrap from '../images/toolsIcon/bootstrap.png';
import css from '../images/toolsIcon/css.png';
import html from '../images/toolsIcon/html.png';
import js from '../images/toolsIcon/js.png';
import nodejs from '../images/toolsIcon/nodejs.png';
import php from '../images/toolsIcon/php.png';
import react from '../images/toolsIcon/react.png';
import sass from '../images/toolsIcon/sass.png';
import wordpress from '../images/toolsIcon/wordpress.png';

const OurTools = () => {
  return (
    <div className="our-tools">
      <h2>Наши инструменты</h2>
      <div className="list-tools">
        <div>
          <img src={js} alt="" />
        </div>
        <div>
          <img src={nodejs} alt="" />
        </div>
        <div>
          <img src={react} alt="" />
        </div>
        <div>
          <img src={php} alt="" />
        </div>
        <div>
          <img src={wordpress} alt="" />
        </div>
        <div>
          <img src={html} alt="" />
        </div>
        <div>
          <img src={css} alt="" />
        </div>
        <div>
          <img src={sass} alt="" />
        </div>
        <div>
          <img src={bootstrap} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurTools;
