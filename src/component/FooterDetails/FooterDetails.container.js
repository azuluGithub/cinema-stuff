import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import FooterDetailsComponent from './FooterDetails.component';

class FooterDetails extends PureComponent {

    render() {
        return <FooterDetailsComponent />;
    }
}

export default withRouter(FooterDetails);