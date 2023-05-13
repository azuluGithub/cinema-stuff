import { PureComponent } from 'react';

import './About.style.scss';

class AboutComponent extends PureComponent {

  renderTitle() {
    return (
      <p className='About-Title'>
        {'About'}
      </p>
    );
  }

  renderContentLeft() {
    return (
      <div className=''>
        <p className='About-ContentParagraph'>
            {'The 10th edition of the European Film Festival is drawing to a close. Cinema screenings and online streaming in South Africa are done, the SA community centres and schools programmes are done, the 3-day programme in Eswatini is done, all that remains is the 3-day programme taking place at the Alliance française in Lesotho from 28 -30 September. We trust that participants and audiences have enjoyed the experience and we hope to see you all back again next year. Special thanks to the various partners, the operating team, and to the European Union Delegation, participating member states and cultural agencies who have made this festival possible. '} 
        </p>
      </div>
    );
  }

  renderContentRight() {
    return (
      <div className=''>
        <p className='About-ContentParagraph'>
          {'The European Film Festival 2023 is a partnership project of the Delegation of the European Union to South Africa and 14 European embassies and cultural agencies in South Africa: the Embassies of Austria, Belgium, Georgia, Italy, the Netherlands, Poland, Portugal, Spain, Sweden, Switzerland, Ukraine, and the British Council, Camoes Institute of Portugal, French Institute in South Africa, Goethe-Institut, Italian Cultural Institute and Wallonie-Bruxelles International. The festival is organised in cooperation with Cineuropa and coordinated by Creative WorkZone'} 
        </p>
      </div>
    );
  }

  renderComponents() {
    return (
      <div className='PaddedContainer'>
        { this.renderTitle() }
        <div className='About-Divider'></div>
        <div className='About-Content Split'>
          { this.renderContentLeft() }
          { this.renderContentRight() }
        </div>
      </div>
    );
  }

  renderAbout() {
    return (
      <section className='About'>
        <div className='ContainerWrapper'>
          { this.renderComponents() }
        </div>
      </section>
    );
  }

  render() {
    return this.renderAbout();
  }
}

export default AboutComponent;