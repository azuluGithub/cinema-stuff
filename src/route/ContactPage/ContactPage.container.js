import { PureComponent } from 'react';
import { connect } from 'react-redux';

import ContactPageComponent from './ContactPage.component';
import { CONTACT_PAGE, CONTACT_PAGE_ROUTE } from './ContactPage.config';
import { routeAction } from '../../store/Route/Route.action';
import { overlayAction } from '../../store/Overlay/Overlay.action';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    routeAction: (route) => dispatch(routeAction(route)),
    overlayAction: (name) => dispatch(overlayAction(name)),
})

class ContactPage extends PureComponent {

    setCurrentRoute() {
        const { routeAction } = this.props;
        
        const currentRoute = {
            name: CONTACT_PAGE,
            path: CONTACT_PAGE_ROUTE,
        };

        routeAction(currentRoute);
    }

    componentDidMount() {
        this.setCurrentRoute();
        this.closeOverLay();
    }

    componentDidUpdate(prevProps) {
        this.closeOverLay();
    }

    closeOverLay() {
        const { overlayAction } = this.props;

        return overlayAction('');
    }

    renderComponent() {
        return (
            <ContactPageComponent />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);