import { Component } from 'react';
import Navbar from './Navbar';
import HeroFirstPage from './HeroFirstPage';
import Preview from './Preview';
import OurTools from './OurTools';
import HowCreateSite from './HowCreateSite';
import Footer from './Footer';

class ScrollComponent extends Component {
  handleScroll = (event) => {
    if (event.deltaY > 0) {
      // Прокрутка вниз
      console.log('Прокрутка вниз');
      // Ваш код обработки прокрутки вниз
    }
  };

  render() {
    return (
      <div onWheel={this.handleScroll}>
        <Navbar />,
        <HeroFirstPage />,
        <OurTools />,
        <HowCreateSite />,
        <Preview />,
        <Footer />,
      </div>
    );
  }
}
export default ScrollComponent;
