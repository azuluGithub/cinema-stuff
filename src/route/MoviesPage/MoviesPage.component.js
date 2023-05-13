import { PureComponent } from 'react';

import Header from '../../component/Header';
import Movies from '../../component/Movies';
import Footer from '../../component/Footer';
import FooterDetails from '../../component/FooterDetails';

import './MoviesPage.style.scss';

class MoviesPageComponent extends PureComponent {

    mediaServices = [
        {
            id: 'ster kinekor',
            logo: `${process.env.PUBLIC_URL}/assets/images/media-service/sterkinekor-logo.png`,
            imgUrl: `${process.env.PUBLIC_URL}/assets/images/media-service/sterkinekor.png`,
            title: 'STER KINEKOR',
            alias: 'The Zone',
            price: 'R80',
            address: {
                streetAddress: '181 Oxford Service Rd,',
                town: 'Rosebank,',
                city: 'Johannesburg,',
                postalCode: '2196',
            }
        },
        {
            id: 'labia',
            logo: `${process.env.PUBLIC_URL}/assets/images/media-service/labia-logo.png`,
            imgUrl: `${process.env.PUBLIC_URL}/assets/images/media-service/labia.png`,
            title: 'Labia Theater',
            alias: 'The Labia',
            price: 'R70',
            address: {
                streetAddress: '68 Orange Street,',
                town: 'Gardens,',
                city: 'Cape Town,',
                postalCode: '8000',
            }
        }
    ];

    renderHeader() {
        return (
          <div className='MoviesPage-Header'>
            <Header />
          </div>
        );
    }

    renderService(service) {
        const { id, logo, title, alias, address, price, imgUrl } = service;

        return (
            <div className='MoviesPage-MediaService' key={id}>
                <div className='MoviesPage-MSContent'>
                    <img
                        className='MoviesPage-MSLogo'
                        src={logo}
                        alt='media service logo'
                    />
                    <p className='MoviesPage-MSTitle'>{title}</p>
                    <p className='MoviesPage-MSAlias'>{alias}</p>
                    <div className='MoviesPage-MSAddress'>
                        <p className='MoviesPage-MSAddressText'>{address.streetAddress}</p>
                        <p className='MoviesPage-MSAddressText'>{address.town}</p>
                        <p className='MoviesPage-MSAddressText'>{address.city}</p>
                        <p className='MoviesPage-MSAddressText'>{address.postalCode}</p>
                    </div>
                    <div className='MoviesPage-MSPriceContainer'>
                        <div className='MoviesPage-MSPriceSubLine'></div>
                        <span className='MoviesPage-MSPrice'>{price}</span>
                    </div>
                </div>
                <div className='MoviesPage-MSImage'>
                    <img
                        className='MoviesPage-MSImg'
                        src={imgUrl}
                        alt='media service'
                    />
                </div>
            </div>
        );
    }

    renderMediaServices() {

        return (
            <div className='ContainerWrapper MoviesPage-MediaServices'>
                <div className='MoviesPage-MSSplitted'>
                    { this.mediaServices.map(this.renderService)}
                </div>
            </div>
        );
    }

    renderHero() {
        return (
          <div className='MoviesPage-Hero'>
            { this.renderHeader() }
            { this.renderMediaServices() }
          </div>
        );
    }
    
    renderComponents() {
        return (
            <div>
                { this.renderHero() }
                <Movies />
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

export default MoviesPageComponent;