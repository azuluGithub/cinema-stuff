import { PureComponent } from 'react';

import Header from '../../component/Header';
import Contact from '../../component/Contact';
import Footer from '../../component/Footer';
import FooterDetails from '../../component/FooterDetails';

import './ContactPage.style.scss';

class ContactPageComponent extends PureComponent {

    renderHeader() {
        return (
          <div className='ContactPage-Header'>
            <Header />
          </div>
        );
      }
    
      renderBgImage() {
        const bgImg = `${process.env.PUBLIC_URL}/assets/images/contact/contact-bg.jpg`;
    
        return (
          <div className='ContactPage-BgImage'>
            <img
                className='ContactPage-BgImg'
                src={bgImg}
                alt='european film festival banner'
            />
          </div>
        );
      }
    
      renderHero() {
        return (
          <section className='ContactPage'>
            { this.renderHeader() }
            { this.renderBgImage() }
          </section>
        );
      }
    
      renderComponents() {
        return (
            <div>
                { this.renderHero() }
                <Contact />
                <FooterDetails />
                <Footer />
            </div>
        )
    }

    renderContact() {
        return (
            <main>
                { this.renderComponents() }
            </main>
        );
    }

    render() {
        return this.renderContact();
    }
}

export default ContactPageComponent;