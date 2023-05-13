import { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import FooterComponent from './Footer.component';

class Footer extends PureComponent {

    renderFooter() {
        const { location: { pathname } } = this.props;

        if (
            pathname.includes('/product')
            || pathname.includes('/auth/sign-in')
            || pathname.includes('/auth/sign-up')
            || pathname.includes('/auth/forgot')
            || pathname.includes('/auth/verify')
            || pathname.includes('/auth/reset')
            || pathname.includes('/admin')
            || pathname.includes('/user')
            || pathname.includes('/checkout')
            ) {
            return <Fragment></Fragment>;
        }

        return (
            <FooterComponent />
        );
    }

    render() {
        return this.renderFooter();
    }
}

export default withRouter(Footer);