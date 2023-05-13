import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import HeaderComponent from './Header.component';
import { RouteType } from '../../type/Route';
import { routeAction } from '../../store/Route/Route.action';

const mapStateToProps = (state) => ({
    currentRoute: state.routeReducer.currentRoute,
});

const mapDispatchToProps = (dispatch) => ({
    routeAction: (route) => dispatch(routeAction(route)),
});

class Header extends PureComponent {
    static propTypes = {
        currentRoute: RouteType,
        routeAction: PropTypes.func,
    }

    static defaultProps = {
        currentRoute: {},
        routeAction: () => {},
    }

    containerProps() {
        const {
            currentRoute,
            currentOverlay,
        } = this.props;

        return {
            currentRoute,
            currentOverlay
        }
    }

    setRoute(route) {
        const { routeAction } = this.props;
        
        routeAction(route);
    }

    containerFunctions() {
        return {
            setRoute: this.setRoute.bind(this),
        }
    }

    renderComponent() {
        const { location: { pathname } } = this.props;

        if (pathname.includes('/admin')
            || pathname.includes('/lecturer')
            || pathname.includes('/student')
        ) {
            return <></>;
        }

        return (
            <HeaderComponent
                { ...this.containerProps() }
                { ...this.containerFunctions() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
