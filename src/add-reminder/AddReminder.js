import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Reminder, Reminders } from '../scheduler/Reminder';
import { getFormattedDate } from '../utils/date-helper';
import './AddReminder.css'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AddReminder({ selectedDayReminders, addReminder }) {
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState();

  React.useEffect(() => {
    setForm(getDefaults);
  }, [selectedDayReminders])

  const getDefaults = () => ({
    date: getFormattedDate(selectedDayReminders?.date),
    reminder: new Reminder('', '', '')
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const reminderToAdd = {...form};
    if(reminderToAdd?.date) {
      reminderToAdd.date = new Date(reminderToAdd.date);
    }
    addReminder(reminderToAdd);
    setForm(getDefaults);
    setOpen(false);
  };

  const handleChange = (e) => {
    const valueOf = e.target.name;
    let formData;
    if(valueOf === 'date') {
      formData = {
        date: e.target.value
      }
    } else {
      formData = {
        reminder: {
          [valueOf]: e.target.value
        }
      }
    }
    setForm({...form, ...formData});
  }

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
              <input type="date" name="date" value={form?.date} onChange={handleChange}/>
            </label>

            <label className="form-items">
              Remind About? &nbsp;&nbsp;
            <input required type="text" name="reminder" value={form?.reminder?.reminder} onChange={handleChange}/>
            </label>

            <label className="form-items">
              Where?
            <input type="text" name="place" value={form?.reminder?.place} onChange={handleChange}/>
            </label>

            <label className="form-items">
              At what time?
            <input type="text" name="time" type="time" value={form?.reminder?.time} onChange={handleChange}/>
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
