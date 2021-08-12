import React, { useEffect } from 'react';

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

const Register = (props) => {
  const classes = useStyles();
  const { register, setError, formState: { errors }, handleSubmit } = useForm();
  const { links, csrf_token } = props;

  const onSubmit = () => {
    document.user_form.submit()
  }

  useEffect(() => {
    console.log(props);
    if(props.email_taken) {
      setError("user[email]", {
        type: "manual",
        message: "Email has already been taken!",
      })
    }
  }, [props.email_taken])

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
        <form name="user_form" className={classes.form} action={links.register} onSubmit={handleSubmit(onSubmit)} method="post" noValidate>
          <input
            type="hidden"
            name="authenticity_token"
            value={csrf_token}
          />

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="user_email"
                label="Email Address"
                autoComplete="email"
                error={ errors.user?.email ? true : false}
                {
                  ...register('user[email]', {
                  required: 'Email is required'
                })}
              />
              <Typography variant="inherit" color="error" display="block">
                {errors.user?.email && errors.user.email.message}
                {errors.email && errors.email.message}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                error={errors.user?.password ? true : false}
                {
                  ...register('user[password]', {
                  required: 'Password is required'
                })}
              />
              <Typography variant="inherit" color="error" display="block">
                {errors.user?.password && errors.user.password.message}
              </Typography>

            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Password"
                type="password"
                id="password_confirmation"
                error={errors.check ? true : false}
                {
                  ...register('user[password_confirmation]', {
                    validate: value =>
                      value === password.value || "The passwords do not match",
                  })}
              />
              <Typography variant="inherit" color="error" display="block">
                {errors.user?.password_confirmation && errors.user.password_confirmation.message}
              </Typography>

            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <MUILink href={links.log_in} variant="body2">
                Already have an account? Log in
              </MUILink>
            </Grid>
          </Grid>

        </form>
      </div>
    </Container>
  );
}

export default Register;

