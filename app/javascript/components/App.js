import React, { Suspense, lazy } from 'react';
import { Router, Route, Switch } from "react-router-dom";

import { Loading } from './pages'

import { history } from "./utils";

import { RestrictedRoute } from "./components";

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Router history={history}>
      <Suspense fallback={Loading}>
        <Switch>

          <Route exact path="/" component={Home} />

          <RestrictedRoute path="/register" component={Register} />
          <RestrictedRoute path="/login" component={Login} />

          <Route path="*" component={NotFound}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;