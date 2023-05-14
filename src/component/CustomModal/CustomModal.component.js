import { PureComponent } from 'react';

import './CustomModal.scss';

class CustomModal extends PureComponent {
    renderContent() {
        const { children, toggleModal } = this.props;
        const close = `${process.env.PUBLIC_URL}/assets/icons/menu/red-cross.png`;

        return (
            <div className="CustomModal">
                <div className="CustomModal-Content">
                    { children }
                    <div
                        className='CustomModal-ViewLessIcon'
                        onClick = {toggleModal}
                    >
                        <img 
                            className='' 
                            src={close} 
                            alt='close icon'
                        />
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return this.renderContent();
    }
}

export default  CustomModal;

