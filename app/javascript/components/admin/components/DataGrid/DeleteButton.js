import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import Button from "@material-ui/core/Button";
import * as React from "react";

const DeleteButton = ({deletePath}) => {
  return (
    <Button
      data-confirm="Are you sure?"
      data-method="delete"
      color="secondary"
      href={deletePath}
      startIcon={<DeleteForeverOutlinedIcon />}
      size="small"
      variant="contained"
    >
      Del
    </Button>
  );
};

export default DeleteButton;