import React, { Component } from 'react';
import axios from 'axios';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';


class Form extends React.Component {
    state = {
      isValidated: false
    };
  
    validate = () => {
      const formEl = this.formEl;
      const formLength = formEl.length;
  
      if (formEl.checkValidity() === false) {
        for (let i = 0; i < formLength; i++) {
          const elem = formEl[i];
          const errorLabel = elem.parentNode.querySelector(".invalid-feedback");
  
          if (errorLabel && elem.nodeName.toLowerCase() !== "button") {
            if (!elem.validity.valid) {
              const { t, i18n } = this.props;
                switch(elem.id){
                    case 'name' :
                        errorLabel.textContent = t('form.name');
                        break;
                    case 'phone' :
                        errorLabel.textContent = t('form.phone');
                        break;
                    case 'message' :
                        errorLabel.textContent = t('form.message');
                        break;
                }

            } else {
              errorLabel.textContent = "";
            }
          }
        }
  
     return false;
      } else {

        for (let i = 0; i < formLength; i++) {
          const elem = formEl[i];
          const errorLabel = elem.parentNode.querySelector(".invalid-feedback");
          if (errorLabel && elem.nodeName.toLowerCase() !== "button") {
            errorLabel.textContent = "";
          }
        }
  
        return true;
      }
    };

    submitHandler = event => {
      event.preventDefault();
  
        if (this.validate()) {
        this.props.submit(event);
      }
  
      this.setState({ isValidated: true });

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      const phone = document.getElementById('phone').value;
      if(name != '' && (email != '' || phone != '') && message != ''){          
 
      axios({
          method: "POST", 
          //url: `${process.env.REACT_APP_API}`,
          url: 'http://paysagement.sclmedia.ca/api/contact/index.php',
          headers: { "content-type": "application/json" },
          data: {
              name: name,   
              email: email,  
              message: message,
              phone: phone
          }
       })
      //.then((response)=>{
      //     if (response.data.sent === 'true'){
      //       console.log(response)
      //         this.resetForm()
      //     }else if(response.data.msg === 'fail'){
      //     }
      // })
      .then(result => {
        if (result.data.sent) {
          
          mailSent: result.data.sent
          console.log(result);
          this.resetForm();
          
        } else {
          console.log('no result');
        }
      })
  }else{
      alert('no');
  }
    };

    resetForm(){
        document.getElementById('contact-form').reset();
    }
  
    render() {
      const props = [...this.props];

      let classNames = [];
      if (props.className) {
        classNames = [...props.className];
        delete props.className;
      }
  
      if (this.state.isValidated) {
        classNames.push("was-validated");
      }

    return (
        <form
          {...props}
          className={classNames}
          noValidate
          ref={form => (this.formEl = form)}
          onSubmit={this.submitHandler}
          id='contact-form'
        >
          {this.props.children}
        </form>
      );
    }
  }
  export default withNamespaces('translation')(Form);  