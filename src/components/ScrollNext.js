import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollElement } from '@utils/scroll';

import '../styles/ScrollNext.scss';

class ScrollNext extends Component {
  scrollNext() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollElement(nextPage);
  }

  render() {
    return (
      <div className="scroll-to-next" onClick={(e) => this.scrollNext()}>
        <div className="arrow bounce">
          <button className="fas fa-chevron-down fa-2x" href="#" />
        </div>
      </div>
    );
  }
}

ScrollNext.propTypes = {
  pageSelector: PropTypes.string
};

export default ScrollNext;
