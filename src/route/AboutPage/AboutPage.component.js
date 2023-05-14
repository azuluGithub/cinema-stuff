import { PureComponent } from 'react';

import Header from '../../component/Header';
import About from '../../component/About';
import CustomModal from '../../component/CustomModal';
import Footer from '../../component/Footer';
import FooterDetails from '../../component/FooterDetails';

import './AboutPage.style.scss';

class AboutPageComponent extends PureComponent {

    state = {
        isModalOpen: false,
    }

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

    toggleModal() {
        const { isModalOpen } = this.state;

        this.setState({ isModalOpen: !isModalOpen });
    }

    renderPlayerButton() {
        const playerIcon = `${process.env.PUBLIC_URL}/assets/icons/other/play-icon.png`;
    
        return (
            <div 
                className='AboutPage-PlayerButton'
                onClick={() => this.toggleModal()}
            >
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

    renderModal() {
        const { isModalOpen } = this.state;

        return (
            <div>
                { isModalOpen && 
                    <CustomModal toggleModal={this.toggleModal.bind(this)}>
                    {
                        !navigator.onLine ?
                            <p className='AboutPage-Offline'>
                                {'Your Network is currently offline'}
                            </p>
                            :
                            <video className='AboutPage-Video' controls autoPlay>
                                <source
                                    type='video/mp4'
                                    src={`${process.env.PUBLIC_URL}/assets/videos/intro.mp4`}
                                />
                            </video>
                    }
                    </CustomModal>
                }
            </div>
        );
    }
    
    renderComponents() {
        return (
            <div className='AboutPage'>
                { this.renderHero() }
                { this.renderEmptyBox() }
                { this.renderModal() }
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