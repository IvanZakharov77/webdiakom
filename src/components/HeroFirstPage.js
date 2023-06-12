import { useState, useEffect } from 'react';
import oneimg from '../images/hero/1.jpg';
import twoimg from '../images/hero/2.jpg';
import threeimg from '../images/hero/3.jpg';
import fourimg from '../images/hero/4.jpg';
import fiveimg from '../images/hero/5.jpg';
import siximg from '../images/hero/6.jpg';
import sevenimg from '../images/hero/7.jpg';
import eightimg from '../images/hero/8.jpg';
import NameOfTheSite from './NameOfTheSite';

const HeroFirstPage = () => {
  const [startOfMovement, setStartOfMovement] = useState(false);
  const [animateBlock, setAnimateBlock] = useState(false);
  const [textLoading, setTextLoading] = useState(false);

  useEffect(() => {
    const timeoutOne = setTimeout(() => {
      setStartOfMovement(true);
      setAnimateBlock(true);
    }, 500);

    const timeout = setTimeout(() => {
      setTextLoading(true);
    }, 3500);

    return () => clearTimeout(timeout, timeoutOne);
  }, []);

  return (
    <div className="hero">
      <div className={animateBlock ? 'header block-animation' : 'header'}>
        {textLoading ? <NameOfTheSite /> : <></>}
      </div>

      <div id="axis" className="one">
        <div className={startOfMovement ? 'object1 move-down' : 'object1'}>
          <div>
            <img src={oneimg} alt="" />
          </div>
          <div>
            <img src={twoimg} alt="" />
          </div>
          <div>
            <img src={threeimg} alt="" />
          </div>
          <div>
            <img src={oneimg} alt="" />
          </div>
        </div>
        <div className={startOfMovement ? 'object2 move-down' : 'object2'}>
          <div>
            <img src={fourimg} alt="" />
          </div>
          <div>
            <img src={fiveimg} alt="" />
          </div>
          <div>
            <img src={fourimg} alt="" />
          </div>
          <div>
            <img src={fiveimg} alt="" />
          </div>
        </div>
        <div className={startOfMovement ? 'object3 move-down' : 'object3'}>
          <div>
            <img src={siximg} alt="" />
          </div>
          <div>
            <img src={sevenimg} alt="" />
          </div>
          <div>
            <img src={eightimg} alt="" />
          </div>
          <div>
            <img src={siximg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroFirstPage;
