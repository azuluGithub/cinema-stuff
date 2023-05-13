import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import './NoMatch.style.scss';

class NoMatchComponent extends PureComponent {

    static propTypes = {
        setCurrentRoute: PropTypes.func,
    }

    static defaultProps = {
        setCurrentRoute: () => {},
    }

    renderHeader() {
        return (
            <h1 className='NoMatch-Header'>
                { '404' }
            </h1>
        );
    }

    renderSubtitle() {
        return (
            <p className='NoMatch-Subtitle TextCenter'>
                { 'Sorry, The Requested Page Was Not Found' }
            </p>
        );
    }

    renderBackButton() {

        return (
            <Link
                to="/"
                className="Link"
            >
                <div className='Button NoMatch-Button'>
                    { 'Back To Home Page' }
                </div>
            </Link>
        );
    }

    renderNoMatch() {
        return (
            <div className='NoMatch'>
                <div className='NoMatch-Container'>
                    { this.renderHeader() }
                    { this.renderSubtitle() }
                    { this.renderBackButton() }
                </div>
            </div>
        );
    }

    render() {
        return this.renderNoMatch();
    }
}

export default NoMatchComponent;