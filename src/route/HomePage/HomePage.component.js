import { PureComponent } from 'react';

import Banner from '../../component/Banner';
import Companies from '../../component/Companies';
import FooterDetails from '../../component/FooterDetails';
import Footer from '../../component/Footer';

class HomePageComponent extends PureComponent {

    renderComponents() {
        return (
            <div>
                <Banner />
                <Companies />
                <FooterDetails />
                <Footer />
            </div>
        )
    }

    renderHome() {
        return (
            <main className='Home'>
                { this.renderComponents() }
            </main>
        );
    }

    render() {
        return this.renderHome();
    }
}

export default HomePageComponent;