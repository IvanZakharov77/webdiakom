import business from '../images/icon-create/business.svg';
import development from '../images/icon-create/development.svg';
import document from '../images/icon-create/document.svg';
import layout from '../images/icon-create/layout.svg';
import projects from '../images/icon-create/project.svg';

const HowCreateSite = () => {
  return (
    <div className="create-site">
      <div>
        <img src={business} alt="" />
        <p>
          Изучаем тематику <br /> вашей компании
        </p>
      </div>
      <div>
        <img src={document} alt="" />
        <p>Составляем четкое ТЗ</p>
      </div>
      <div>
        <img src={layout} alt="" />
        <p>
          Подбираем подходящий макет <br /> или создаем с нуля
        </p>
      </div>

      <div>
        <img src={development} alt="" />
        <p>Разработка сайта</p>
      </div>
      <div>
        <img src={projects} alt="" />
        <p>Запуск проекта</p>
      </div>
    </div>
  );
};
export default HowCreateSite;
