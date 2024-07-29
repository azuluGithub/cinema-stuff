import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../component/Header';

import './Banner.style.scss';

class BannerComponent extends PureComponent {

  renderContent() {
    return (
      <div className='ContainerWrapper'>
        <div className='Banner-ContentContainer'>
          <div className='Banner-Content'>
            <div className='Banner-ContentTop'>
              <div className='Banner-ContentSubTextTop'>
                <span className='Banner-ContentSubText'>{'The Tenth'}</span>
                <div className='Banner-ContentSubLine'></div>
              </div>
              <h2 data-text='EUROPEAN FILM FESTIVAL' className='Banner-ContentHeading'>
                {'EUROPEAN FILM FESTIVAL'}
              </h2>
            </div>
            <p className='Banner-ContentParagraph'>
              {'The European Film Festival 2023 is a partnership project of the Delegation of the European Union to South Africa and 14 European embassies and cultural agencies in South Africa.'}
            </p>
            <div className='Banner-ContentBottom'>
              <p className='Banner-ContentDate'> {'September 2023'} </p>
              <Link className='Link' to='/movies'>
                <button className='Banner-ContentButton LayeredButton Button'>
                  {'Buy Tickets'}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderHeader() {
    return (
      <div className='Banner-Header'>
        <Header />
      </div>
    );
  }

  renderBgImage() {
    const bgImg = `${process.env.PUBLIC_URL}/assets/images/home/home-bg.jpg`;

    return (
      <div className='Banner-BgImage'>
        <img
            className='Banner-BgImg'
            src={bgImg}
            alt='european film festival banner'
        />
        { this.renderContent() }
      </div>
    );
  }

  renderBanner() {
    return (
      <section className='Banner'>
        { this.renderHeader() }
        { this.renderBgImage() }
      </section>
    );
  }

  render() {
    return this.renderBanner();
  }
}

export default BannerComponent;