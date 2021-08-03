import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useStyles } from "./style";

const Loading = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <CircularProgress />
      <Typography variant="h3">
        Loading...
      </Typography>
    </Grid>
  );
};

export default Loading;