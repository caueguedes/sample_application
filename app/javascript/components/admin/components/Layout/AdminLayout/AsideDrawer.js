import React from "react";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";

import { useStyles } from "./style";


function AsideDrawer({links}) {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {links.map(item => (
            <ListItem
              component="a"
              href={item.link}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default AsideDrawer;