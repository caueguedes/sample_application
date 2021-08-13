import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { Copyright } from "./Copyright";

import { useStyles } from "./style";

export function Footer(){
  const classes = useStyles();
  return (
    <Container
      maxWidth="md"
      component="footer"
      className={classes.footer}
    >
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Sample Application meaningful footer
      </Typography>
      <Copyright />
    </Container>
  );
};