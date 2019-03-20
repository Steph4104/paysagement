import React, { Component } from 'react';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
import ImageHome from '../components/ImageHome';
import Menu from '../components/Menu';
import ScrollNext from '../components/ScrollNext';
import PaveBanner from "../images/pave_banner.jpg";


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
          {/* {t('home.keywords')}
            <div>{t('home.description')}</div> */}
            <Menu />
          </div> 
          <img className="img-banner" src={PaveBanner}/>
          {/* <ImageHome /> */}
        </div>
      </main>
      <ScrollNext pageSelector=".about-page" />
    </div>
  );
};
}
export default withNamespaces('translation')(Home);
