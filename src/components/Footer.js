import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/Footer.scss';
class Footer extends Component {
render(){
  return (
    <footer>
      <div className="content-grid">
        <div>Facebook javascript<span role="img" aria-label="heart">❤️</span>APCHQ number</div>
      </div>
    </footer>
  );
};
}

Footer.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Footer;