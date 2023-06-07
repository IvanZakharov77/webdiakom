import defaultz from '../images/modal-preview/default.jpg';
import interior from '../images/modal-preview/interior.jpg';
import bigcartel from '../images/modal-preview/bigcartel.jpg';
import ecommerce from '../images/modal-preview/ecommerce.jpg';
import bicycle from '../images/modal-preview/bicycle.jpg';
import cafe from '../images/modal-preview/cafe.jpg';
import digital from '../images/modal-preview/digital.jpg';
import event from '../images/modal-preview/event.jpg';

const ModalPreview = () => {
  return (
    <div className="preview">
      <div>
        <div>
          <img src={defaultz} alt="" />
        </div>
        <div>
          <img src={interior} alt="" />
        </div>
      </div>
      <div>
        <div>
          <img src={ecommerce} alt="" />
        </div>
        <div>
          <img src={bigcartel} alt="" />
        </div>
        <div>
          <img src={bicycle} alt="" />
        </div>
        <div>
          <img src={event} alt="" />
        </div>
      </div>
      <div>
        <div>
          <img src={cafe} alt="" />
        </div>
        <div>
          <img src={digital} alt="" />
        </div>
      </div>
    </div>
  );
};
export default ModalPreview;
