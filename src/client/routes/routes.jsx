import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { PAGES } from './pages';
import App from '../components/app/app';
import HomePage from '../components/home-page/home-page';
import InfoPage from '../components/info-page/info-page';
import Page404 from '../components/page404/page404';

const WrappedApp = (Component, props) => (
  <App appName='Express React Redux Typescript Babel 7 Boilerplate'>
    <Component { ...props } />
  </App>
);

export default () => (
  <Switch>
    <Route
      exact path={ PAGES.home.path }
      render={ props => WrappedApp(HomePage, props) }
    />
    <Route
      exact path={ PAGES.info.path }
      render={ props => WrappedApp(InfoPage, props) }
    />
    <Route
      exact path={ PAGES.page404.path }
      render={ props => WrappedApp(Page404, props) }
    />
    <Route
      path = '/'
      render={ () => (
        <Redirect to={ PAGES.page404.path } />
      ) }
    />
  </Switch>
);
