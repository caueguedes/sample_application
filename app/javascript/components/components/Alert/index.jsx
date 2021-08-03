import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar, IconButton } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

import { alertActions } from "../../store/alert";


function Alert() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(alertActions.clearAlert());
  return (
  <Snackbar
      {...alert}
      onClose={handleClose}
      action={
        <IconButton
          size='small'
          aria-label='close'
          color='inherit'
          onClick={handleClose}
        >
          <CloseIcon fontSize='small' />
        </IconButton>
      }
    />
  );
};

export default Alert;