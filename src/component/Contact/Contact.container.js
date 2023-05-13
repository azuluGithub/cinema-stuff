import { PureComponent } from 'react';

import ContactComponent from './Contact.component';

class Contact extends PureComponent {

    renderContact() {
        return (
            <ContactComponent />
        );
    }

    render() {
        return this.renderContact();
    }
}

export default Contact;