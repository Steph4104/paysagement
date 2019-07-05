import React, { Component } from 'react';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
import { toElement as scrollElement } from '@utils/scroll';
//import ScrollNext from '../components/ScrollNext';
import Quality from '../images/quality_job.jpg';
import Variety from '../images/variety_job.jpg';
import Manege from '../images/manege_job.jpg';
import '../styles/About.scss';

class About extends Component {
  scrollNext() {
    const nextPage = document.querySelector(".contact-page");
    scrollElement(nextPage);
  }
render(){
  const { t, i18n } = this.props;
  return (
    <div className="about-page">
      <div className="content-grid">
        
  
        <div className="about-wrapper">
          <h2 align="center">{t('about.about')}</h2>
          <div className="about-content">
         
            <div className="img-content"><img className="img-job" src={Quality}/></div>
            <div class="box">
            <h3 className="about-title">{t('about.passion')}</h3>
            <p>{t('about.text1')}</p>
            <p>{t('about.text2')}</p>
            <p>{t('about.text3')}</p>
            <div><button className="contact-button"  onClick={(e) => this.scrollNext()}>{t('about.contact')}</button></div>
            </div>
          </div>
        </div>
      </div>
      {/* <ScrollNext pageSelector=".wedo-page" /> */}
    </div>
  );
};
}

export default  withNamespaces('translation')(About);
