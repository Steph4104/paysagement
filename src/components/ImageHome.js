import React, { Component } from 'react';
import Pave from '../images/pave.jpg';
import Maintenance from '../images/maintenance.jpg';
import Plants from '../images/plants.jpg';
import Accessories from '../images/accessories.jpg';

import '../styles/ImageHome.scss';

class ImageHome extends Component {

render(){  
  return (
    <div className="social-icons animate-icons">
        <img class="icon-size" src={Pave}/>
        <img class="icon-size" src={Maintenance}/>
        <img class="icon-size" src={Plants}/>
        <img class="icon-size" src={Accessories}/>
      </div>
  );
};
}
export default ImageHome;