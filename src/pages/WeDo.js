import React, { Component } from 'react';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
// import ScrollNext from '../components/ScrollNext';
import pave from '../images/pave.jpg';
import prep from '../images/maintenance.jpg';
import acces from '../images/carousel4.jpg';
import plant from '../images/plants.jpg';
import '../styles/Wedo.scss';

class Wedo extends Component {

render(){
  const { t, i18n } = this.props;
  return (
    <div className="wedo-page">
      <div className="content-grid">
        
  
        <div className="wedo-wrapper">
          <h2 align="center">{t('service.services')}</h2>
          <div className="wedo-content">
         
            <div className="img-content"><img className="img1" src={pave}/> <h3>{t('service.pavement')}</h3><p>{t('service.desc.pavement')}</p></div>
            <div className="img-content"><img className="img1" src={prep}/><h3>{t('service.prep')}/<br />{t('service.ent')}</h3><p>{t('service.desc.prep')}</p></div>
            <div className="img-content"><img className="img1" src={acces}/><h3>{t('service.aces')}</h3><p>{t('service.desc.aces')}</p></div>
            <div className="img-content"><img className="img1" src={plant}/> <h3>{t('service.plant')}</h3><p>{t('service.desc.plant')}</p></div>
          </div>
        </div>
      </div>
      {/* <ScrollNext pageSelector=".project-page" /> */}
    </div>
  );
};
}

export default  withNamespaces('translation')(Wedo);
