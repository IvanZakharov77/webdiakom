import Popup from 'reactjs-popup';
import defaultz from '../images/modal-preview/default.jpg';
import interior from '../images/modal-preview/interior.jpg';
import bigcartel from '../images/modal-preview/bigcartel.jpg';
import ecommerce from '../images/modal-preview/ecommerce.jpg';
import bicycle from '../images/modal-preview/bicycle.jpg';
import cafe from '../images/modal-preview/cafe.jpg';
import digital from '../images/modal-preview/digital.jpg';
import event from '../images/modal-preview/event.jpg';

const Preview = () => {
  return (
    <div className="preview">
      <div>
        <div>
          <Popup
            trigger={
              <div>
                <img src={defaultz} alt="" />
              </div>
            }
            modal
            closeOnDocumentClick
          >
            {(close) => (
              <div>
                <button onClick={close}>Закрыть</button>
                <iframe
                  src="https://ivanzakharov77.github.io/sparrow/"
                  title="Содержимое страницы"
                />
              </div>
            )}
          </Popup>
        </div>
        <div>
          <Popup
            trigger={
              <div>
                <img src={interior} alt="" />
              </div>
            }
            modal
            closeOnDocumentClick
          >
            {(close) => (
              <div>
                <button onClick={close}>Закрыть</button>
                <iframe
                  src="https://ivanzakharov77.github.io/interior/"
                  title="Содержимое страницы"
                />
              </div>
            )}
          </Popup>
        </div>
      </div>
      <div>
        <div>
          <a href="/">
            <img src={ecommerce} alt="" />
          </a>
        </div>
        <div>
          <Popup
            trigger={
              <div>
                <img src={bigcartel} alt="" />
              </div>
            }
            modal
            closeOnDocumentClick
          >
            {(close) => (
              <div>
                <button onClick={close}>Закрыть</button>
                <iframe
                  src="https://ivanzakharov77.github.io/bigcartel/"
                  title="Содержимое страницы"
                />
              </div>
            )}
          </Popup>
        </div>
        <div>
          <Popup
            trigger={
              <div>
                <img src={bicycle} alt="" />
              </div>
            }
            modal
            closeOnDocumentClick
          >
            {(close) => (
              <div>
                <button onClick={close}>Закрыть</button>
                <iframe
                  src="https://ivanzakharov77.github.io/bysicle/"
                  title="Содержимое страницы"
                />
              </div>
            )}
          </Popup>
        </div>
        <div>
          <Popup
            trigger={
              <div>
                <img src={event} alt="" />
              </div>
            }
            modal
            closeOnDocumentClick
          >
            {(close) => (
              <div>
                <button onClick={close}>Закрыть</button>
                <iframe src="https://ivanzakharov77.github.io/event/" title="Содержимое страницы" />
              </div>
            )}
          </Popup>
        </div>
      </div>
      <div>
        <div>
          <Popup
            trigger={
              <div>
                <img src={cafe} alt="" />
              </div>
            }
            modal
            closeOnDocumentClick
          >
            {(close) => (
              <div>
                <button onClick={close}>Закрыть</button>
                <iframe src="https://ivanzakharov77.github.io/cafe/" title="Содержимое страницы" />
              </div>
            )}
          </Popup>
        </div>
        <div>
          <Popup
            trigger={
              <div>
                <img src={digital} alt="" />
              </div>
            }
            modal
            closeOnDocumentClick
          >
            {(close) => (
              <div>
                <button onClick={close}>Закрыть</button>
                <iframe
                  src="https://ivanzakharov77.github.io/digital/"
                  title="Содержимое страницы"
                />
              </div>
            )}
          </Popup>
        </div>
      </div>
    </div>
  );
};
export default Preview;
