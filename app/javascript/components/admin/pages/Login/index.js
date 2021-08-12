import React, { useEffect } from "react"

import { useForm } from "react-hook-form";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import MUILink from "@material-ui/core/Link";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { useStyles } from "./style";

const Index = (props) => {
  const classes = useStyles();
  const {register, formState: {errors}, handleSubmit} = useForm();
  const { links, csrf_token } = props;
  const onSubmit = () => {
    document.user_form.submit()
  }
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline/>

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Login Admin
          </Typography>

          <form name="user_form" className={classes.form} action={links.log_in} onSubmit={handleSubmit(onSubmit)} method="post" noValidate>
            <input
              type="hidden"
              name="authenticity_token"
              value={csrf_token}
            />

            <TextField
              id="email"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email Address"
              autoComplete="email"
              autoFocus
              error={errors.user?.email ? true : false}
              {...register("user[email]", {
                required: 'Email is required'
              })}
            />
            <Typography variant="inherit" color="error" display="block">
              {errors.user?.email && errors.user.email.message}
            </Typography>

            <TextField
              id="password"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              error={errors.user?.password ? true : false}
              {...register("user[password]", {
                required: 'Password is required'
              })}
            />
            <Typography variant="inherit" color="error" display="block">
              {errors.user?.password && errors.user.password.message}
            </Typography>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log in
            </Button>

            <Grid container>
              <Grid item>
                <MUILink  href={links.register} variant="body2">
                  Don't have an account? Register
                </MUILink>
              </Grid>
            </Grid>

          </form>
        </div>
      </Container>
    </>
  );
}

export default Index;