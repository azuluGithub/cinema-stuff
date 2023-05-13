import { PureComponent } from 'react';

import './Contact.style.scss';

class ContactComponent extends PureComponent {

  state = {
    userName: '',
    userEmail: '',
    subject: '',
    message: '',
  }

  socialsList= [
    {
        id: 'social-email',
        icon: `${process.env.PUBLIC_URL}/assets/icons/social/email-icon.png`,
        name: 'email',
    },
    {
        id: 'social-facebook',
        icon: `${process.env.PUBLIC_URL}/assets/icons/social/facebook-icon.png`,
        name: 'facebook',
    },
    {
        id: 'social-linkedin',
        icon: `${process.env.PUBLIC_URL}/assets/icons/social/linkedin-icon.png`,
        name: 'linkedin',
    },
    {
        id: 'social-twitter',
        icon: `${process.env.PUBLIC_URL}/assets/icons/social/twitter-icon.png`,
        name: 'twitter',
    },
  ]

  renderTitle() {
    return (
      <p className='Contact-Title'>
        {'Contact Us'}
      </p>
    );
  }

  renderImage() {
    const Img = '/assets/images/contact/contact.png';

    return (
      <div className='Contact-Image'>
        <img 
            className='Contact-Img' 
            src={Img} 
            alt='european film festival student' 
        /> 
      </div>
    );
  }
 
  renderInfo() {
    const phone = `${process.env.PUBLIC_URL}/assets/icons/social/phone-icon.png`;
    const email = `${process.env.PUBLIC_URL}/assets/icons/social/email-icon.png`;
   
    return (
      <div className='Contact-Info'>
        <div className='Contact-InfoItem'>
          <div className='Contact-InfoItemDetail'>
            <p className='Contact-InfoItemKey'>{'Phone'}</p>
            <p className='Contact-InfoItemValue'>{'078 500 4488'}</p>
          </div>
          <div className='Contact-InfoItemImage'>
            <img 
                className='Contact-InfoItemImg' 
                src={phone} 
                alt='european film festival contact' 
            /> 
          </div>
        </div>
        <div className='Contact-BottomLine'></div>
        <div className='Contact-InfoItem'>
          <div className='Contact-InfoItemDetail'>
            <p className='Contact-InfoItemKey'>{'Email'}</p>
            <p className='Contact-InfoItemValue'>{'info@creativeworkzone.co.za'}</p>
          </div>
          <div className='Contact-InfoItemImage'>
            <img 
                className='Contact-InfoItemImg' 
                src={email} 
                alt='european film festival contact' 
            /> 
          </div>
        </div>
        <div className='Contact-BottomLine'></div>
      </div>
    );
  }

  checkForEmptyInputs() {
    const { userName, userEmail, subject, message } = this.state;
    
    if (!userName.trim().length || !userEmail.trim().length || !subject.trim().length || !message.trim().length) {
    
      return false;
    }

    return true;
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.checkForEmptyInputs()) {
      return ;
    }

  }

  handleInputChange(e) {
    const { target: { name, value } } = e;

    this.setState({ [name]: value });
  }

  renderContactForm() {
    const { userName, userEmail, subject, message } = this.state;

    return (
      <div className='Contact-ContactForm'>
        { this.renderTitle() }
        <div className='Contact-Divider'></div>
        <form className='Contact-Form' onSubmit={(e) => this.handleSubmit(e)}>
          <div className='FormInputContainer'>
            <input 
              type='text' 
              className='Contact-FormInput' 
              name='userName' 
              value={userName}
              placeholder='Enter your name'
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <div className='FormInputContainer'>
            <input 
              type='email' 
              className='Contact-FormInput' 
              name='userEmail' 
              value={userEmail}
              placeholder='Enter email'
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <div className='FormInputContainer'>
            <input 
              type='text' 
              className='Contact-FormInput' 
              name='subject' 
              value={subject}
              placeholder='Enter Subject'
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <div className='FormInputContainer'>
            <textarea 
              className='Contact-TextArea'
              name='message'
              value={message}
              placeholder='Enter your message...'
              onChange={(e) => this.handleInputChange(e)}
            ></textarea>
          </div>
          <button
            type='submit'
            className='Button Contact-Button'
          >{"Send Message"}</button>
        </form>
      </div>
    );
  }

  renderComponents() {
    return (
      <div className='Split'>
        { this.renderInfo() }
        { this.renderContactForm() }
      </div>
    );
  }

  renderContact() {
    return (
      <section className='Contact PaddedContainer'>
        <div className='ContainerWrapper'>
          { this.renderComponents() }
        </div>
      </section>
    );
  }

  render() {
    return this.renderContact();
  }
}

export default ContactComponent;