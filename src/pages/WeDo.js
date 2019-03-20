import React, { Component } from 'react';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
import ScrollNext from '../components/ScrollNext';
import Quality from '../images/quality_job.jpg';
import Variety from '../images/variety_job.jpg';
import Manege from '../images/manege_job.jpg';
import '../styles/Wedo.scss';

class Wedo extends Component {

render(){
  const { t, i18n } = this.props;
  return (
    <div className="wedo-page">
      <div className="content-grid">
        
  
        <div className="wedo-wrapper">
          <h2 align="center">What we do</h2>
          <div className="wedo-content">
         
            <div className="img-content"><img className="img1" src={Quality}/> <h3>Pavé</h3><p>Notre spécialité est le pavé. Nous offrons principalement de faire des bordures, des escaliers, des trottoirs, des recouvrements de balcons, des murs, des stationnements et plus encore.</p></div>
            <div className="img-content"><img className="img1" src={Quality}/><h3>Préparation/<br />Entretien</h3><p>Avec nos années d'expérience, nous savons qu'il est primordial de bien préparer le terrain avec une excavation, l'isolation des fondations et l'installation de drains. Nous appliquons aussi un polymère et un scellent au besoin pour que l'installation soit durable.</p></div>
            <div className="img-content"><img className="img1" src={Quality}/><h3>Accessoires</h3><p>Les détails sont ce qui amène le plus de cachet à un paysagement extérieur. Nous pouvons construire une remise, une clôture, une pergola ou une terrasse en trex et d'installer de l'éclairage ou de la tourbe.</p></div>
            <div className="img-content"><img className="img1" src={Quality}/> <h3>Plantes</h3><p>Il n'y a rien de mieux pour finaliser un projet que de belles plantes remplis de couleurs et un nouveau gazon frais et vert.C'est souvent cela qui donne la dernière touche qui fait tourner les têtes.</p></div>
          </div>
        </div>
      </div>
      <ScrollNext pageSelector=".project-page" />
    </div>
  );
};
}

export default  withNamespaces('translation')(Wedo);
