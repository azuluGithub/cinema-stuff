import { cloneElement, PureComponent, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Loader from '../Loader';
import HomePage from '../../route/HomePage';
import AboutPage from '../../route/AboutPage';
import ContactPage from '../../route/ContactPage';
import MoviesPage from '../../route/MoviesPage';
import NoMatch from '../../route/NoMatch';

import { TOP_ELEMENTS, MAIN_ELEMENTS } from './Router.config';

class RouterComponent extends PureComponent {

  [TOP_ELEMENTS] = [];

  [MAIN_ELEMENTS] = [
    { component: <Route exact path="/" component={HomePage} key='home'/> },
    { component: <Route path="/about" component={AboutPage} key='about'/> },
    { component: <Route path="/contact" component={ContactPage} key='contact'/> },
    { component: <Route path="/movies" component={MoviesPage} key='movies'/> },
    { component: <Route path="/404-page-not-found" component={NoMatch} key='nomatch'/> },
    { component: <Route component={NoMatch} key='nomatch'/> },
  ];

  renderElements(ELEMENTS) {
    return this[ELEMENTS].map(({ component }) => cloneElement(component));
  }

  renderLoader() {
    return <Loader />;
  }

  renderMainElements() {
    return (
      <Suspense fallback={this.renderLoader()}>
        <Switch>
          { this.renderElements(MAIN_ELEMENTS) }
        </Switch>
      </Suspense>
    );
  }

  renderRouter() {
    return (
      <BrowserRouter>
        { this.renderElements(TOP_ELEMENTS) }
        { this.renderMainElements() }
      </BrowserRouter>
    );
  }

  render() {
    return this.renderRouter();
  }
}

export default RouterComponent;
