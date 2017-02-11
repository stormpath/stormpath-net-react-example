import React from 'react';
import { render } from 'react-dom';
import { Route, IndexRoute, browserHistory } from 'react-router';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';

import Layout from './components/common/Layout';
import LoginPage from './components/auth/LoginPage';
import ProfilePage from './components/auth/ProfilePage';
import RegistrationPage from './components/auth/RegisterPage';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';
import '../scss/site.scss';

ReactStormpath.init({
  endpoints:{
    baseUri: '/api'
  }
});

render(
  <Router history={browserHistory}>
    <HomeRoute path="/" component={Layout}>
      <IndexRoute component={HomePage}/>
      <Route path="/contact" component={ContactPage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path='/register' component={RegistrationPage} />
      <LoginRoute path='/login' component={LoginPage} />
      <AuthenticatedRoute>
        <HomeRoute path='/profile' component={ProfilePage} />
      </AuthenticatedRoute>
    </HomeRoute>
  </Router>,
  document.getElementById('app')
);
