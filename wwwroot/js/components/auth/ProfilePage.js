import React from 'react';

import { UserProfileForm } from 'react-stormpath';

export default class ProfilePage extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h3>My Profile</h3>
            <hr />
          </div>
        </div>
         <UserProfileForm/>
      </div>
    );
  }
}
