import React from "react";

import MUIAppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { useStyles } from "./style";

function AppBar({title, logoutLink}){
  const classes = useStyles();
  return(
    <MUIAppBar
      position="fixed"
      className={classes.appBar}
    >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          className={classes.title}
        >
          {title}
        </Typography>

        <Button
          variant="contained"
          component="a"
          data-method="delete"
          href={logoutLink}
        >
          LogOut
        </Button>
      </Toolbar>

    </MUIAppBar>
  );
};

export default AppBar;