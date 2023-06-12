import { useState } from 'react';
import Popup from 'reactjs-popup';
import defaultz from '../images/modal-preview/default.jpg';
import interior from '../images/modal-preview/interior.jpg';
import bigcartel from '../images/modal-preview/bigcartel.jpg';
import ecommerce from '../images/modal-preview/ecommerce.jpg';
import bicycle from '../images/modal-preview/bicycle.jpg';
import cafe from '../images/modal-preview/cafe.jpg';
import digital from '../images/modal-preview/digital.jpg';
import event from '../images/modal-preview/event.jpg';
import closes from '../images/popupIcon/close.svg';
import phone from '../images/popupIcon/phone.svg';
import tablet from '../images/popupIcon/tablet.svg';
import pc from '../images/popupIcon/pc.svg';

const Preview = () => {
  const [transformModal, setTransformModal] = useState('phone-window');
  const funcTransformModal = (data) => {
    setTransformModal(data);
  };
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
                <button
                  className="but-popup"
                  onClick={() => {
                    close();
                    funcTransformModal('phone-window');
                  }}
                >
                  <img className="icon-popup" src={closes} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('phone-window')}>
                  <img className="icon-popup" src={phone} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('table-window')}>
                  <img className="icon-popup" src={tablet} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('pc-window')}>
                  <img className="icon-popup" src={pc} />
                </button>
                <iframe
                  className={transformModal}
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
                <button
                  className="but-popup"
                  onClick={() => {
                    close();
                    funcTransformModal('phone-window');
                  }}
                >
                  <img className="icon-popup" src={closes} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('phone-window')}>
                  <img className="icon-popup" src={phone} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('table-window')}>
                  <img className="icon-popup" src={tablet} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('pc-window')}>
                  <img className="icon-popup" src={pc} />
                </button>
                <iframe
                  className={transformModal}
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
                <button
                  className="but-popup"
                  onClick={() => {
                    close();
                    funcTransformModal('phone-window');
                  }}
                >
                  <img className="icon-popup" src={closes} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('phone-window')}>
                  <img className="icon-popup" src={phone} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('table-window')}>
                  <img className="icon-popup" src={tablet} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('pc-window')}>
                  <img className="icon-popup" src={pc} />
                </button>
                <iframe
                  className={transformModal}
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
                <button
                  className="but-popup"
                  onClick={() => {
                    close();
                    funcTransformModal('phone-window');
                  }}
                >
                  <img className="icon-popup" src={closes} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('phone-window')}>
                  <img className="icon-popup" src={phone} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('table-window')}>
                  <img className="icon-popup" src={tablet} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('pc-window')}>
                  <img className="icon-popup" src={pc} />
                </button>
                <iframe
                  className={transformModal}
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
                <button
                  className="but-popup"
                  onClick={() => {
                    close();
                    funcTransformModal('phone-window');
                  }}
                >
                  <img className="icon-popup" src={closes} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('phone-window')}>
                  <img className="icon-popup" src={phone} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('table-window')}>
                  <img className="icon-popup" src={tablet} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('pc-window')}>
                  <img className="icon-popup" src={pc} />
                </button>
                <iframe
                  className={transformModal}
                  src="https://ivanzakharov77.github.io/event/"
                  title="Содержимое страницы"
                />
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
                <button
                  className="but-popup"
                  onClick={() => {
                    close();
                    funcTransformModal('phone-window');
                  }}
                >
                  <img className="icon-popup" src={closes} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('phone-window')}>
                  <img className="icon-popup" src={phone} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('table-window')}>
                  <img className="icon-popup" src={tablet} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('pc-window')}>
                  <img className="icon-popup" src={pc} />
                </button>
                <iframe
                  className={transformModal}
                  src="https://ivanzakharov77.github.io/cafe/"
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
                <img src={digital} alt="" />
              </div>
            }
            modal
            closeOnDocumentClick
          >
            {(close) => (
              <div>
                <button
                  className="but-popup"
                  onClick={() => {
                    close();
                    funcTransformModal('phone-window');
                  }}
                >
                  <img className="icon-popup" src={closes} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('phone-window')}>
                  <img className="icon-popup" src={phone} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('table-window')}>
                  <img className="icon-popup" src={tablet} />
                </button>
                <button className="but-popup" onClick={() => funcTransformModal('pc-window')}>
                  <img className="icon-popup" src={pc} />
                </button>
                <iframe
                  className={transformModal}
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
