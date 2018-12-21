import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollElement } from '@utils/scroll';

import '../styles/ScrollPrevious.scss';

class ScrollPrevious extends Component {
  scrollPrevious() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollElement(nextPage);
  }

  render() {

    return (
      <div
        className="scroll-to-previous"
        onClick={(e) => this.scrollPrevious()}
      >
        <div className="arrow bounce">
          <button className="fas fa-chevron-up fa-2x" href="#" />
        </div>
      </div>
    );
  }
}

ScrollPrevious.propTypes = {
  pageSelector: PropTypes.string
};

export default ScrollPrevious;
