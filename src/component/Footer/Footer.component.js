import { PureComponent } from 'react';

import './Footer.style.scss';

class FooterComponent extends PureComponent {

  renderText() {
    return (
      <div className='Footer-TextContainer'>
        <p className='Footer-Text'>
          {'2023 '}
          <span className='Footer-TextName'>
            {' | Arnold Zulu '}
          </span>
        </p>
      </div>
    );
  }

  renderCopyright() {
    const imgUrl = '/assets/icons/copyright/copyright-icon-red.png';

    return (
      <div className='Footer-Image'>
        <img 
            className='Footer-CopyrightImg' 
            src={imgUrl} 
            alt='copyright icon' 
        /> 
      </div>
    );
  }

  renderComponents() {
    return (
      <div className='Footer-Components'>
        { this.renderCopyright() }
        { this.renderText() }
      </div>
    );
  }

  renderSpacer() {
    return (
      <div className='Footer-Spacer'></div>
    );
  }

  renderFooter() {
    return (
      <footer className='Footer'>
        <div className='ContainerWrapper'>
          { this.renderSpacer() }
          <div className='Footer-FooterContainer'>
            { this.renderComponents() }
          </div>
        </div>
      </footer>
    );
  }

  render() {
    return this.renderFooter();
  }
}

export default FooterComponent;