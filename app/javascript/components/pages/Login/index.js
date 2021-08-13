import React from 'react';
import { useDispatch } from "react-redux";

import { Link, useLocation } from 'react-router-dom';

import { useForm } from "react-hook-form";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MUILink from "@material-ui/core/Link";
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { useStyles } from "./style";

import { loginActions } from "../../store/login";

import routes from '../../config/routes.json';

const Login = () => {
  const classes = useStyles();
  const { register, formState: { errors }, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const location = useLocation();

  const onSubmit = user => {
    const { from } = location.state || { from: { pathname: "/" } };
    dispatch(loginActions.login(user, from));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} method="post" noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error={errors.email ? true : false}
            {...register("email", {
              required: 'Email is required'
            })}
          />
          <Typography variant="inherit" color="error" display="block">
            {errors.email && errors.email.message}
          </Typography>

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={errors.password ? true : false}
            {...register("password", {
              required: 'Password is required'
            })}
          />
          <Typography variant="inherit" color="error" display="block">
            {errors.password && errors.password.message}
          </Typography>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>

          <Grid container>
            <Grid item>
              <MUILink component={Link} to={routes.REGISTER.path} variant="body2">
                Don't have an account? Register
              </MUILink>
            </Grid>
          </Grid>

        </form>
      </div>
    </Container>
  );
}

export default Login;