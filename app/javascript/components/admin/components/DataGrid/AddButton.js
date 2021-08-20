import React from "react";
import Button from "@material-ui/core/Button";

const AddButton = (props) => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="small"
        {...props}
      >
        Add
      </Button>
    </>
  )
}

export default AddButton;