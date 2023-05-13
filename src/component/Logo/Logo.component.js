import { PureComponent } from 'react';

import './Logo.style.scss';

class LogoComponent extends PureComponent {
    
    renderLogo() {
        const logo = `${process.env.PUBLIC_URL}/assets/logo/logo.png`;

        return (
            <div className='Logo'>
                <img
                    className='Logo-Logo'
                    src={logo} 
                    alt='european film festival logo'
                />
            </div>
        );
    }

    render() {
        return this.renderLogo();
    }
}

export default LogoComponent;