import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { alertActions } from "../../store/alert";

import { isLoggedIn } from "../../utils";

import routes  from '../../config/routes.json'


export default function RestrictedRoute({ component: Component, ...rest}) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn()) {
        dispatch(alertActions.showAlert({
          message: "You are already logged in"}
        ));
    }
  });

  return (
    <Route {...rest} render={props => (
      !isLoggedIn()
        ? <Component {...props} />
        : <Redirect to={routes.HOME.path} />
    )} />
  );
};
