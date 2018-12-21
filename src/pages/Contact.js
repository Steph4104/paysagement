import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollPrevious from '../components/ScrollPrevious';
import Form from '../components/Form';
import Footer from '../components/Footer';

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
      return (
        <div className={"alert alert-success mt-4"} role="alert">
          Form was successfully validated and is ready to be submitted!
        </div>
      );
    }
  
    render() {
      return (
        <div className="contact-page">
                <div className="content-grid">

                    <h1>Contact us</h1>
                  <div className='info-box'>
                    <div className="contact-info">
                    <p><i class="fab fa-font-awesome"></i>: 555-555-5555</p>
                    <p><i class="fab fa-font-awesome"></i>: exemple@exemple.com</p>
                    </div>
                    <div className="promo">
                    <p>Free estimation!</p>
                    <p>Residential and Commercial!</p>
                    <p>Gatineau / Ottawa</p>
                    </div>
                  </div>
                <Form submit={this.submit}>
                 <div className="contact-form validate-form">
                 <div className="wrap-input rs1-wrap-input validate-input">
                    <label
                      htmlFor={"Name"}
                      className={"label-input"}
                      >
                      Name*
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
                      Email
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
                      phone*
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
                      message*
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
                       Submit!
                      </button>
                    </div>
                    </div></div>
                </Form>
              </div>

          {this.state.showFormSuccess ? this._renderSuccessMessage() : null}
          <ScrollPrevious pageSelector=".project-page" />
        </div>
      );
    }
  }
export default Contact;
