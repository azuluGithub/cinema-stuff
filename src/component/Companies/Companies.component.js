import { useEffect, useState } from "react";

import './Companies.style.scss';

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

const CompaniesComponent = () => {
  
  const [ setRef, isVisible ] = useOnScreen({ threshold: 0.3 });

  const renderCompaniesImage = () => {
    const companies = `${process.env.PUBLIC_URL}/assets/images/home/companies.png`;
    const toggleCompaniesImage = isVisible ? 'Companies-CompaniesImage_Appear': 'Companies-CompaniesImage_FadeIn';
    
    return (
      <div className={`Companies-CompaniesImage ${toggleCompaniesImage}`}>
        <img
          className='Companies-CompaniesImg'
          src={companies} 
          alt='european film festival companies'
        />
      </div>
    );
  }

  const renderContent = () => {
      
    const toggleContent = isVisible ? 'Companies-Content_Appear': 'Companies-Content_FadeIn';

    return (
      <div className={`Companies-Content ${toggleContent}`}>
        {'The European Film Festival 2022 is a partnership project of the Delegation of the European Union to South Africa and 14 European embassies and cultural agencies in South Africa: the Embassies of Austria, Belgium, Georgia, Italy, the Netherlands, Poland, Portugal, Spain, Sweden, Switzerland, Ukraine, and the British Council, Camoes Institute of Portugal, French Institute in South Africa, Goethe-Institut, Italian Cultural Institute and Wallonie-Bruxelles International. The festival is organised in cooperation with Cineuropa and coordinated by Creative WorkZone.'}
      </div>
    );
  }


  const renderPartners = () => {
    return (
        <div className='Companies-PartnersContainer'>
            <div className='ContainerWrapper PaddedContainer'>
                <div className='Companies-Partners'>
                    { renderCompaniesImage() }
                    { renderContent() }
                </div>
            </div>
        </div>
    )
  }


  return (
    <section ref={setRef} className='Companies'>
      { renderPartners() }
    </section>
  );
}

export default CompaniesComponent;