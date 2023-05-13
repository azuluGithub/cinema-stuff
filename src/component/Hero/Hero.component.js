import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Hero.style.scss';

class Hero extends PureComponent {

    static propTypes = {
        data: PropTypes.object.isRequired
    }

    renderImage() {
        const { data: { url } } = this.props;

        return (
            <div className='Hero-Image'>
                <img
                    className='Hero-Img'
                    src={url}
                    alt='hospital items'
                />
            </div>
        );
    }

    renderContainer() {
        const { data: { heading } } = this.props;

        return (
            <div className='Hero-Container ContainerWrapper'>
                <h2 className='Hero-Heading'>
                    { heading }
                </h2>
            </div>
        )
    }

    renderComponents() {
        return (
          <section className='Hero'>
            { this.renderImage()}
            { this.renderContainer() }
          </section>
        );
    }

    render() {
        return this.renderComponents();
    }
}

export default Hero;