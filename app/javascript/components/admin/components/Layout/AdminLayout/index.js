import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from "./AppBar";
import AsideDrawer from "./AsideDrawer";

function AdminLayout(props) {
  return (
    <>
      <CssBaseline />
      <AppBar {...props} />
      <AsideDrawer {...props} />
    </>
  );
}

export default AdminLayout;