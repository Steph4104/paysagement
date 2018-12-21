import React, { Component } from 'react';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
import ScrollNext from '../components/ScrollNext';
import Quality from '../images/quality_job.jpg';
import Variety from '../images/variety_job.jpg';
import Manege from '../images/manege_job.jpg';
import '../styles/About.scss';

class About extends Component {

render(){
  const { t, i18n } = this.props;
  return (
    <div className="about-page">
      <div className="content-grid">
        <h1>About</h1>
  
        <div className="about-wrapper">
          <div className="about-content">
            <div class="box">
            <img className="img-job" src={Quality}/>
            <p>{t('about.text1')}</p>
            </div>
            <div class="box">
            <p>{t('about.text2')}</p>
            <img className="img-job" src={Variety}/>
            </div>
            <div class="box">
            <img className="img-job" src={Manege}/>
            <p>{t('about.text3')}</p>
            </div>
          </div>
        </div>
      </div>
      <ScrollNext pageSelector=".project-page" />
    </div>
  );
};
}

export default  withNamespaces('translation')(About);
