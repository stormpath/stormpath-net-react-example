import React from 'react';
import { Link } from 'react-router';
import { Authenticated, NotAuthenticated, LoginLink, LogoutLink } from 'react-stormpath';

const Navigation = (props) => {
  return(
    <div className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
          <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">Sample, Inc.</Link>
          </div>
          <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <NotAuthenticated>
                    <li><LoginLink>Login</LoginLink></li>
                  </NotAuthenticated>
                  <Authenticated>
                    <li><Link to="/profile">My Profile</Link></li>
                    <li><LogoutLink>Logout</LogoutLink></li>
                  </Authenticated>
              </ul>
          </div>
      </div>
    </div>
  );
}

export default Navigation;
