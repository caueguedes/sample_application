import React from 'react';

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import WarningRoundedIcon from '@material-ui/icons/WarningRounded';

import { useStyles } from './style';

const NotFound = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Typography variant="h3">404</Typography>
      <WarningRoundedIcon className={classes.warning_icon}/>
      <Typography variant="h3">Not Found</Typography>
    </Grid>
  );
};

export default NotFound;