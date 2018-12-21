import React, { Component } from 'react';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
import ImageHome from '../components/ImageHome';
import Menu from '../components/Menu';
import ScrollNext from '../components/ScrollNext';


import '../styles/Home.scss';
class Home extends Component {
render(){
  const { t, i18n } = this.props;
  return (
    <div className="landing-page">
      <Menu />
      <main>
     
        <div className="intro-wrapper">
          <div className="intro-name">Title here!</div>
          <div className="tagline">
          {t('title')}
            <div>{t('description.longuer')}</div>
          </div>
          <ImageHome />
        </div>
      </main>
      <ScrollNext pageSelector=".about-page" />
    </div>
  );
};
}
export default withNamespaces('translation')(Home);
