import React, { Suspense, lazy } from 'react';
import { Router, Route, Switch } from "react-router-dom";

import { history } from "./utils";

import { RestrictedRoute } from "./components";

import { Loading } from './pages'

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Pricing = lazy(() => import("./pages/Pricing"));
const Register = lazy(() => import('./pages/Register'));
const Units = lazy(() => import("./pages/Units"));


const App = () => {
  return (
    <Router history={history}>
      <Suspense fallback={Loading}>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/units" component={Units} />

          <RestrictedRoute path="/register" component={Register} />
          <RestrictedRoute path="/login" component={Login} />

          <Route path="*" component={NotFound}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;