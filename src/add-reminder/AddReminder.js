import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import './AddReminder.css'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AddReminder() {
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="large" variant="text" color="inherit" onClick={handleClickOpen}>
        Add New
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Add New Reminder"}</DialogTitle>
        <DialogContent>
          <form className="add-new-form">
            <label className="form-items">
              Date:
            <input type="text" name="name" type="date"/>
            </label>

            <label className="form-items">
              Remind About?
            <input type="text" name="name" />
            </label>

            <label className="form-items">
              Where?
            <input type="text" name="name" />
            </label>

            <label className="form-items">
              At what time?
            <input type="text" name="name" type="time"/>
            </label>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddReminder;
