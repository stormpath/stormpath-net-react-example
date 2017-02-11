import React from 'react';
import { Link } from 'react-router';
import { Authenticated, NotAuthenticated, LoginLink, LogoutLink } from 'react-stormpath';

export default class Navigation extends React.Component{
  static contextTypes = {
    user: React.PropTypes.object
  };
  render(){
    return (
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
              <li><Link to="/" activeClassName="active">Home</Link></li>
              <li><Link to="/about" activeClassName="active">About</Link></li>
              <li><Link to="/contact" activeClassName="active">Contact</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <NotAuthenticated>
                <li>
                  <LoginLink activeClassName="active" />
                </li>
              </NotAuthenticated>
              <Authenticated>
                <li>
                  <LogoutLink />
                </li>
              </Authenticated>
              <NotAuthenticated>
                <li>
                  <Link to="/register" activeClassName="active">Create Account</Link>
                </li>
              </NotAuthenticated>
              <Authenticated>
                <li>
                  <Link to="/profile" activeClassName="active">
                    Hello { this.context.user ? ' ' + this.context.user.givenName : null }!
                  </Link>
                </li>
              </Authenticated>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
