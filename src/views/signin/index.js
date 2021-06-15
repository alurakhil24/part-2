import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useAuthState } from "../../hooks/useAuthState";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function AlertDialog() {
  const [isAuthenticated, toggleAuth] = useAuthState();
  const history = useHistory();
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    history.push('/');
  };
  const handleSubmitted = () => {
    setOpen(false);
    toggleAuth();
    history.push('/');
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {isAuthenticated ? "Logout" : "Login"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please click on confirm to {isAuthenticated ? "logout" : "login"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button data-testid='auth-button' onClick={handleSubmitted} color="primary" autoFocus>
            {isAuthenticated ? "Logout" : "Login"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
