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
      <nav
        ref={(elem) => {
          this.nav = elem;
        }}
      >
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
           Our work
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
    );
  }
}

Menu.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default withNamespaces('translation')(Menu);
