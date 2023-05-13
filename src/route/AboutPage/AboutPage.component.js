import { PureComponent } from 'react';

import Header from '../../component/Header';
import About from '../../component/About';
import Footer from '../../component/Footer';
import FooterDetails from '../../component/FooterDetails';

import './AboutPage.style.scss';

class AboutPageComponent extends PureComponent {

    renderHeader() {
        return (
          <div className='AboutPage-Header'>
            <Header />
          </div>
        );
    }

    renderPlayerContainer() {
        const bgImg = `${process.env.PUBLIC_URL}/assets/images/about/player-bg.jpg`;
    
        return (
            <div className='AboutPage-PlayerContainer'>
                <img
                    className='AboutPage-BgImg'
                    src={bgImg}
                    alt='european film festival banner'
                />
            </div>
        );
    }

    renderPlayerButton() {
        const playerIcon = `${process.env.PUBLIC_URL}/assets/icons/other/play-icon.png`;
    
        return (
            <div className='AboutPage-PlayerButton'>
                <img
                    className='AboutPage-playerIcon'
                    src={playerIcon}
                    alt='european film festival banner'
                />
            </div>
        );
    }

    renderEmptyBox() {
        return (
          <div className='AboutPage-EmptyBox'></div>
        );
    }
    
    renderHero() {
        return (
          <div className='AboutPage-Bg'>
            { this.renderHeader() }
            { this.renderPlayerContainer() }
            { this.renderPlayerButton() }
          </div>
        );
      }
    
    renderComponents() {
        return (
            <div className='AboutPage'>
                { this.renderHero() }
                { this.renderEmptyBox() }
                <About />
                <FooterDetails />
                <Footer />
            </div>
        )
    }

    render() {
        return (
            <main>
                { this.renderComponents() }
            </main>
        );
    }
}

export default AboutPageComponent;