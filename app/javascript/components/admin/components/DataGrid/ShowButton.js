import Button from "@material-ui/core/Button";
import * as React from "react";

const ShowButton = ({showPath}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      size="small"
      href={showPath}
    >
      show
    </Button>
  )
}

export default ShowButton;