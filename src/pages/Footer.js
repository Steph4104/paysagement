import React, { Component } from 'react';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
import ScrollNext from '../components/ScrollNext';
import Quality from '../images/quality_job.jpg';
import Variety from '../images/variety_job.jpg';
import Manege from '../images/manege_job.jpg';
import '../styles/Footer.scss';

class Footer extends Component {

render(){
  const { t, i18n } = this.props;
  return (
    <div className="footer-page">
      <div className="content-grid">
        
      
    
          <span className='fas fa-arrow-right my-icon'></span>
          <span className='fas fa-arrow-right my-icon'></span>
          <span className='fas fa-arrow-right my-icon'></span>
        <p>©2019 by pavé uni sousa.</p>
        
        <div className="footer-wrapper">
        </div>
        </div>
    </div>
  );
};
}

export default  withNamespaces('translation')(Footer);
