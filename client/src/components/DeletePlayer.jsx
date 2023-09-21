import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const DeletePlayer = (props) => {
  const { player, open } = props;

  return (
    <>
      {player && (
        <Dialog
          open={open}
          onClose={() => props.onSetOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {`Are you sure you want to remove ${player.name}?`}
          </DialogTitle>

          <DialogActions>
            <Button onClick={() => props.onSetOpen(false)}>Cancel</Button>
            <Button  onClick={() => props.onHandleDelete(player._id)} autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default DeletePlayer;