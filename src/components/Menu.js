import React, { Component } from 'react';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '@utils/scroll';
import Logo from '../images/logo_paveunisousa.jpg';
import '../styles/Menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > this.nav.offsetTop) {
      this.setState({
        isSticky: true
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const { t, i18n } = this.props;
    var lang = t('lang');
    return (
      <div>
      {/* <header class="header">
      <a href="" class="logo">CSS Nav</a>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
      <ul class="menu">
        <li><a href="#work">Our Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#careers">Careers</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header> */}
      <nav
        ref={(elem) => {
          this.nav = elem;
        }}
      >
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul className="menu">
          <li
            className="menu-item active"
            onClick={(e) => this.scrollToPage('.about-page')}
          >
           {t('menu.about')}
          </li>
          <li
            className="menu-item "
            onClick={(e) => this.scrollToPage('.wedo-page')}
          >
          {t('menu.services')}
          </li>
          <li
            className="menu-item"
            onClick={(e) => this.scrollToPage('.project-page')}
          >
            {t('menu.project')}
          </li>
          <li
            className="menu-item"
            onClick={(e) => this.scrollToPage('.contact-page')}
          >
            {t('menu.contact')}
          </li>
          <li
            className="menu-item"
            onClick={() => i18n.changeLanguage(lang)}
          >
             {t('lang')}
          </li>
        </ul>
      </nav>
      </div>
    );
  }
}

Menu.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default withNamespaces('translation')(Menu);
