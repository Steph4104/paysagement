import React, { Component } from 'react';
import ScrollNext from '../components/ScrollNext';
import ScrollPrevious from '../components/ScrollPrevious';
import '../styles/Project.scss';

import Carousel from '../components/Carousel';

// Data for carousel
const carouselSlidesData = [
  {
    photo:
      <img src='https://via.placeholder.com/600'/>,
    info: "Entrée"
  }, {
    photo:
      <img src='https://via.placeholder.com/600'/>,
    info: "Trottoir"
  }, {
    photo:
      <img src='https://via.placeholder.com/600'/>,
    info: "Piscine"
  }, {
    photo:
      <img src='https://via.placeholder.com/600'/>,
    info: "Arrière"
  }, {
    photo:
     <img src='https://via.placeholder.com/600'/>,
    info: "Escalier"
  }, {
    photo:
      <img src='https://via.placeholder.com/600'/>,
    info: "Bordure"
  }, {
    photo:
      <img src='https://via.placeholder.com/600'/>,
    info: "Mure"
  }
];
class Project extends Component {

render(){
  return (
    <div className="project-page">
      <div className="content-grid">
        <h1>Project</h1>
        <div className="project-wrapper">
                   <Carousel slides={carouselSlidesData} />
        </div>
          <a className="more_link"href="#">More -></a>

      </div> 
      <div className="align-scroll"> 
      <ScrollNext pageSelector=".contact-page" />
      <ScrollPrevious pageSelector=".about-page" />
      </div>
    </div>
  );
};
}

export default Project;
