import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from "@material-ui/core/Button";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import MUILink from "@material-ui/core/Link";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";

import { loginActions, userSelector } from "../../../store/login";

import { useStyles } from "./style";

import routes  from '../../../config/routes.json'

export const DefaultHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const classes = useStyles();

  const handleLogout = () => {
    dispatch(loginActions.logout());
  }

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar} >
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          Sample <LockOutlinedIcon />
        </Typography>

        <nav>
          {Object.values(routes)
            .filter(route => route.public)
            .map((route) =>(
              <MUILink
                key={route.title}
                to={route.path}
                component={Link}
                variant="button"
                color="textPrimary"
                className={classes.link}
              >
                {route.title}
              </MUILink>
            )
          )}
        </nav>

        { user
          ? <Button
              onClick={handleLogout}
              color="secondary"
              variant="outlined"
              className={classes.link}
            >
              Logout
            </Button>
          : <Button
              to={routes.LOGIN.path}
              component={Link}
              color="primary"
              variant="outlined"
              className={classes.link}
            >
              Login
            </Button>
        }
      </Toolbar>
    </AppBar>
  );
}
