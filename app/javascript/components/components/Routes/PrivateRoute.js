import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isLoggedIn } from "../../utils";

import routes from '../../config/routes.json'

export default function PrivateRoute({ component: Component, ...rest}) {
  return (
    <Route {...rest} render={props => (
      isLoggedIn()
        ? <Component {...props} />
        : <Redirect to={{
            pathname: routes.LOGIN.path,
            state: { from: props.location }
          }}/>
      )}
    />
  );
};
