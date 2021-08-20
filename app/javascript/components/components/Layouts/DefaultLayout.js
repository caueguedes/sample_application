import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { DefaultHeader } from "../Header";
import { Footer } from "../Footer";

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <DefaultHeader/>
        {children}
      <Footer/>
    </>
  );
}
