import React, { Component } from 'react';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
import ScrollNext from '../components/ScrollNext';
import Slide1 from '../images/carousel1.jpg';
import Slide2 from '../images/carousel2.jpg';
import Slide3 from '../images/carousel3.jpg';
import Slide4 from '../images/carousel4.jpg';
import Slide5 from '../images/carousel5.jpg';
import Slide6 from '../images/carousel6.jpg';
import Slide7 from '../images/carousel7.jpg';
import '../styles/Project.scss';

import Carousel from '../components/Carousel';

class Project extends Component {

render(){
  const { t, i18n } = this.props;
  // Data for carousel
  const carouselSlidesData = [
    {
      photo:
        <img src={Slide1}/>,
      info: 'project.entrance'
    }, {
      photo:
        <img src={Slide2}/>,
      info: "{t('about.text1')}"
    }, {
      photo:
        <img src={Slide3}/>,
      info: "Piscine"
    }, {
      photo:
        <img src={Slide4}/>,
      info: "Arrière"
    }, {
      photo:
       <img src={Slide5}/>,
      info: "Escalier"
    }, {
      photo:
        <img src={Slide6}/>,
      info: "Bordure"
    }, {
      photo:
        <img src={Slide7}/>,
      info: "Mure"
    }
  ];
  return (
    <div className="project-page">
      <div className="content-grid">
      <h2 align="center">Project</h2>
        <div className="project-wrapper">
          <Carousel slides={carouselSlidesData} />
        </div>
      <div className="wrap-bloc">
        <div>
          <div className="bloc1"><img src={Slide6}/> <p>blablabla1</p></div>
          <div className="bloc2"><img src={Slide5}/><p>blablabla2</p></div>
        </div>
        <div>
          <div className="bloc3"><img src={Slide1}/><p>blablabla3</p></div>
          <div className="bloc4"><img src={Slide3}/><p>blablabla4</p></div>
        </div>
      </div>
        <a className="more_link" href="#">
          <span className="my-text">More </span>
          <span className='fas fa-arrow-right my-icon'></span>
        </a>

      </div> 


    
        <ScrollNext pageSelector=".contact-page" />
      


    </div>
  );
};
}

export default withNamespaces('translation')(Project);
