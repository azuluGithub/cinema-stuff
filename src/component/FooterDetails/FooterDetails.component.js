import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import './FooterDetails.style.scss';

function useOnScreen(options){
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
        }, options);

        if (ref) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, [ref, options]);

    return [ setRef, isVisible];
}

const FooterDetailsComponent = () => {
  
  const [ setRef, isVisible ] = useOnScreen({ threshold: 0.3 });

  const renderSocial = ({ icon, id }) => {
    return (
      <div className='FooterDetails-SocialImage' key={id}>
        <img 
            className='FooterDetails-SocialImg' 
            src={icon} 
            alt='nursing college social contact' 
        /> 
      </div>
    );
  }

  const renderSocials = () => {
    const socialsList= [
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

    return (
        <div className='FooterDetails-SocialContainer'>
          { socialsList.map((social) => renderSocial(social)) }
        </div>
    );
  }

  const renderContent = () => {
    const toggleContent = isVisible ? 'FooterDetails-Content_Appear': 'FooterDetails-Content_FadeIn';
    
    return (
      <div className={`FooterDetails-Content ${toggleContent}`}>
        <div className='FooterDetails-ContentContainer'>
            <span className='FooterDetails-ContentHeading'>{'EUROPEAN FILM FESTIVAL'}</span>
            <p className='FooterDetails-ContentParagrph'>
                {'The European Film Festival 2022 is a partnership project of the Delegation of the European Union to South Africa and 14 European embassies and cultural agencies in South Africa.'}
            </p>
            { renderSocials() }
        </div>
      </div>
    );
  }

  const renderLink = (url, name) => {
    if (!url) {
      return (
        <span>{ name }</span>
      );
    }
    
    return (
      <Link to={url} className='Link FooterDetails-LinkAnchor'>{ name }</Link>
    );
  }

  const renderLinkElement = (element) => {
    const { name, url } = element;

    return (
      <div key={name} className='FooterDetails-LinkElement'>
        { renderLink(url, name) }
      </div>
    );
  }

  const renderLinksItem = (title, list) => {
    return (
      <div className='FooterDetails-LinksItem'>
        <span className='FooterDetails-LinksTitle'>{title}</span>
        { list.map(renderLinkElement.bind(this)) }
      </div>
    );
  }

  const renderEmptyBox = () => {
    return (
      <div></div>
    );
  }

  const renderLinks = () => {
    const ourSiteList = [
      {
        id: 'home',
        name: 'home',
        url: '/'
      },
      {
          id: "about",
          name: "about",
          url: "/about",
      },
      {
          id: "contact",
          name: "contact",
          url: "/contact",
      },
      {
          id: "movies",
          name: "movies",
          url: "/movies",
      }
    ];
  
    const contactList = [
      {
        id: 'email',
        name: 'info@creativeworkzone.co.za',
        url: null,
      },
      {
        id: 'number',
        name: '078 500 4488',
        url: null,
      }
    ]
      
    const toggleLinks = isVisible ? 'FooterDetails-Links_Appear': 'FooterDetails-Links_FadeIn';

    return (
      <div className={`FooterDetails-Links Split ${toggleLinks}`}>
        { renderEmptyBox() }
        { renderLinksItem('on our site', ourSiteList) }
        { renderLinksItem('contact', contactList) }
      </div>
    );
  }

    const renderComponents = () => {
      return (
        <div className='Split FooterDetails-FooterDetailsContainer'>
          { renderContent() }
          { renderLinks() }
        </div>
      );
    }

    return (
        <section ref={setRef} className='FooterDetails PaddedContainer'>
          <div className='ContainerWrapper'>
            { renderComponents() }
          </div>
        </section>
    );
}

export default FooterDetailsComponent;