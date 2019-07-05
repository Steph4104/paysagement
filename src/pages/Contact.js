import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import Footer from '../components/Footer';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
import '../styles/Contact.scss';

class Contact extends React.Component {
    state = {
      showFormSuccess: false
    };
    submit = () => {
      
      this.setState({showFormSuccess: true});
      setTimeout(() => {this.setState({showFormSuccess: false});}, 5000)
    }
    
    _renderSuccessMessage() {
      const { t, i18n } = this.props;  
      return (
        <div className={"alert alert-success mt-4"} role="alert">
          {t('contact.alert')}
        </div>
      );
    }
  
    render() {
  const { t, i18n } = this.props;
  
      return (
        <div className="contact-page">
                <div className="content-grid">

                <h2 align="center">{t('contact.contact')}</h2>
                  <div className='info-box'>
                    <div className="contact-info">
                    <p><i class="fab fa-font-awesome"></i>: 819-665-0684</p>
                    <p><i class="fab fa-font-awesome"></i>: jessica.botelhosousa@hotmail.fr</p>
                    </div>
                    <div className="promo">
                    <p>{t('contact.estimation')}</p>
                    <p>{t('contact.rescom')}</p>
                    <p>{t('contact.area')}</p>
                    </div>
                  </div>
                <Form submit={this.submit}>
                 <div className="contact-form validate-form">
                 <div className="wrap-input rs1-wrap-input validate-input">
                    <label
                      htmlFor={"Name"}
                      className={"label-input"}
                      >
                      {t('contact.name')}*
                    </label> 
                    <div className="invalid-feedback" />
                    <input
                      id={"name"}
                      className={"input"}
                      required={true}
                      name={"Name"}
                      type={"Name"}
                      />
                      <span class="focus-input"></span>
                   
                    </div>
                  
                  <div className={"wrap-input rs1-wrap-input validate-input"}>
                    <label
                      htmlFor={"Email"}
                      className={"label-input"}
                      >
                      {t('contact.email')}
                    </label>
                    <div className="invalid-feedback" />
                    <input
                      id={"email"}
                      className={"input"}
                      required={false}
                      name={"Email"}
                      type={"Email"}
                      />
                      <span class="focus-input"></span>
                    </div>
                    <div className={"wrap-input rs1-wrap-input validate-input"}>
                    <label
                      htmlFor={"phone"}
                      className={"label-input"}
                      >
                      {t('contact.phone')}*
                    </label>
                    <div className="invalid-feedback" />
                    <input
                      id={"phone"}
                      className={"input"}
                      required={true}
                      name={"phone"}
                      type={"phone"}
                      pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
                      />
                      <span class="focus-input"></span>
                    </div>
                    <div className={"wrap-input validate-input"}>
                    <label
                      htmlFor={"message"}
                      className={"label-input"}
                      >
                      {t('contact.message')}*
                    </label>
                    <div className="invalid-feedback" />
                    <textarea
                      id={"message"}
                      className={"input"}
                      required={true}
                      name={"message"}
                      type={"message"}
                      />
                      <span class="focus-input"></span>
                    </div>
                 
                  <div className={"row justify-content-md-center"}>
                    <div className={"container-contact-form-btn"}>
                      <button
                        type={"submit"}
                        className={"contact-form-btn"}
                        >
                        {t('contact.send')}
                      </button>
                    </div>
                    </div></div>
                </Form>
              </div>

          {this.state.showFormSuccess ? this._renderSuccessMessage() : null}
        </div>
      );
    }
  }
export default withNamespaces('translation')(Contact);
