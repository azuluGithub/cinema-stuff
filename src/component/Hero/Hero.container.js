import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import HeroComponent from './Hero.component';

class Hero extends PureComponent {

    static propTypes = {
        data: PropTypes.object.isRequired
    }

    containerProps() {
        const { data } = this.props;

        return {
            data
        }
    }

    containerFunctions() {}

    renderHero() {
        return (
            <HeroComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderHero();
    }
}

export default Hero;