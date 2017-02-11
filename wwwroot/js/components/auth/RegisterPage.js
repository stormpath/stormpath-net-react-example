import React from 'react';

import { RegistrationForm } from 'react-stormpath';

export default class RegisterPage extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h3>Register</h3>
            <hr />
          </div>
        </div>
        <RegistrationForm />
      </div>
    );
  }
}
