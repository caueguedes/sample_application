import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Link } from 'react-router-dom';

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
import { CircularProgress } from "@material-ui/core";

import { useStyles } from "./style";

import { registerActions } from "../../store/register/actions";


const Register = () => {
  const classes = useStyles();
  const registering = useSelector((state) => state.register.registering);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = user => {
    dispatch(registerActions.register(user));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={errors.firstName ? true : false}
                {
                  ...register('firstName', {
                  required: 'First name is required'
                })}
              />
              <Typography variant="inherit" color="error" display="block">
                {errors.firstName && errors.firstName.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                error={errors.lastName ? true : false}
                {
                  ...register('lastName', {
                  required: "Last name is required"
                })}
              />
              <Typography variant="inherit" color="error" display="block">
                {errors.lastName && errors.lastName.message}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={errors.email? true : false}
                {
                  ...register('email', {
                  required: 'Email is required'
                })}
              />
              <Typography variant="inherit" color="error" display="block">
                {errors.email && errors.email.message}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={errors.password ? true : false}
                {
                  ...register('password', {
                  required: 'Password is required'
                })}
              />
              <Typography variant="inherit" color="error" display="block">
                {errors.password && errors.password.message}
              </Typography>

            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={registering}
          >
            { registering && <div className={classes.root}><CircularProgress /></div> }
            Register
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <MUILink component={Link} to="/login" variant="body2">
                Already have an account? Login
              </MUILink>
            </Grid>
          </Grid>

        </form>
      </div>
    </Container>
  );
}

export default Register;

