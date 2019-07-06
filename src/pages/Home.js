import React, { Component } from 'react';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
import ImageHome from '../components/ImageHome';
import Menu from '../components/Menu';
// import ScrollNext from '../components/ScrollNext';
import PaveBanner from "../images/pave_banner_logo.jpg";


import '../styles/Home.scss';
class Home extends Component {
render(){
  const { t, i18n } = this.props;
  return (
    <div className="landing-page">
     
      <main>
     
        <div className="intro-wrapper">
          <div className="intro-name">{t('home.title')}</div>
          <div className="tagline">
        
            {/* <Menu /> */}
           
          <img className="img-banner" src={PaveBanner}/>
          <div className="textImg">
             {t('home.keywords')}
             <br/>
            {t('home.description')}</div>
          </div>
          {/* <ImageHome /> */}
        </div>
      </main>
      {/* <ScrollNext pageSelector=".about-page" /> */}
    </div>
  );
};
}
export default withNamespaces('translation')(Home);
