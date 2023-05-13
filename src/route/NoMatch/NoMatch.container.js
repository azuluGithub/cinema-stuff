import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NoMatchComponent from './NoMatch.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
})

class NoMatch extends PureComponent {

    static propTypes = {
        routeAction: PropTypes.func,
    }

    componentDidMount() {
        this.setCurrentPath();
    }

    setCurrentPath() {

    }

    setCurrentRoute(route) {
    }

    containerFunctions() {
        return {
        }
    }

    renderComponent() {
        return (
            <NoMatchComponent />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NoMatch);