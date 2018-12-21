import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollNext from '../components/ScrollNext';
import '../styles/About.scss';

class About extends Component {

render(){
 
  return (
    <div className="about-page">
      <div className="content-grid">
        <h1>About</h1>
  
        <div className="about-wrapper">
          <div className="about-content">
         
            <p>

            Jelly-o sweet topping pie.  <span className="highlight">Jujubes cake</span> toffee pudding fruitcake tiramisu sweet roll jelly-o jelly. I love candy canes I love. Cheesecake ice cream lemon drops pudding powder oat cake.
            </p>
            <p>
             Wafer sesame snaps jelly-o chocolate bonbon jelly-o. Croissant I love cotton candy cupcake carrot cake chupa chups jelly-o gummi bears bonbon. <span className="highlight">Cupcake soufflé chocolate</span> lemon drops tart brownie dessert donut.
            </p>
            <p>
            Donut topping sugar plum candy I love gummi bears pudding croissant. Icing chocolate cake sugar plum chupa chups pie candy canes icing brownie. Macaroon candy I love fruitcake <span className="highlight">I love tiramisu</span>. Gummies gingerbread tiramisu chocolate bar.
            </p>
            <p>
  Brownie chupa chups carrot cake. Carrot cake dessert I love halvah sweet roll <span className="highlight">bonbon marshmallow</span> sweet roll. Chocolate cake candy toffee I love.
            </p>
            <p>
Tiramisu chocolate jelly beans topping macaroon topping chocolate bar <span className="highlight">brownie</span> macaroon. Wafer oat cake fruitcake. I love dragée gummi bears cotton candy I love dragée tootsie roll.
            </p>
            <p className="text-emoji">
              <i class="fab fa-font-awesome"></i><i class="fas fa-stroopwafel"></i><i class="fab fa-affiliatetheme"></i><i class="fas fa-anchor"></i>
            </p>
          </div>
        </div>
      </div>
      <ScrollNext pageSelector=".project-page" />
    </div>
  );
};
}

export default About;
