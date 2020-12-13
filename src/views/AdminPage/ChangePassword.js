import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from 'components/CustomButtons/Button.js';
import styles from 'assets/jss/material-kit-react/components/UpcomingStyle';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Close from '@material-ui/icons/Close';
import http from '../../axiosInterceptor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slide from '@material-ui/core/Slide';
import CustomInput from 'components/CustomInput/CustomInput.js';
import InputAdornment from '@material-ui/core/InputAdornment';
import Lock from '@material-ui/icons/Lock';
import { baseUrl, getAdmin, getToken } from '../../Config.js';
import btnStyles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';

const ButtonStyle = makeStyles(btnStyles);

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ChangePassword(props) {
  const { rules, name } = props;
  const classes = useStyles();
  const btnSlasses = ButtonStyle();
  const [updatePasswordModal, setUpdatePasswordModal] = React.useState(false);
  const [oldPass, setOldPass] = React.useState('');
  const [newPass, setNewPass] = React.useState('');
  const [confirmNewPass, setConfirmNewPass] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const changePassword = async () => {
    setLoading(true);
    if (oldPass == '') {
      setLoading(false);
      toast.error('Please enter old password!');
    } else if (newPass === '') {
      setLoading(false);
      toast.error('Please enter new password !');
    } else if (confirmNewPass === '') {
      setLoading(false);
      toast.error('Please enter Confirm  password !');
    } else if (newPass !== confirmNewPass) {
      setLoading(false);
      toast.error('New and confirm password mismatch !');
    } else {
      var admin = getAdmin();
      try {
        const response = await http.post(
          baseUrl + '/api/admin/change-password',
          {
            mobileoremail: admin.emailId,
            oldPassword: oldPass,
            newPassword: newPass,
          },
          { headers: { 'auth-token': getToken() } }
        );

        if (response.status === 200) {
          toast.success('Successfully updated password');
          setLoading(false);
          setUpdatePasswordModal(false);
        }
        if (response.data.status === 404) {
          setLoading(false);
          toast.error(response);
        }
      } catch (error) {
        setLoading(false);
        toast.error(error.message);
      }
    }
  };

  return (
    <div>
      <Button color="dark" onClick={() => setUpdatePasswordModal(true)}>
        Update Password
      </Button>
      <ToastContainer />
      <Dialog
        open={updatePasswordModal}
        TransitionComponent={Transition}
        placeholder
        onClose={() => setUpdatePasswordModal(false)}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <IconButton
            className={classes.modalCloseButton}
            style={{ alignItems: 'flex-end' }}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setUpdatePasswordModal(false)}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          Update Password for {name}
        </DialogTitle>
        <DialogContent style={{ paddingLeft: 30, paddingRight: 30 }}>
          <div className="pl-5 pr-5">
            <CustomInput
              labelText="Current password"
              id="pass"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                onChange: (val) => setOldPass(val.target.value),
                value: oldPass,
                type: 'password',
                endAdornment: (
                  <InputAdornment position="end">
                    <Lock className={classes.inputIconsColor} />
                  </InputAdornment>
                ),
                autoComplete: 'off',
              }}
            />
            <CustomInput
              labelText="New password"
              id="pass"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                onChange: (val) => setNewPass(val.target.value),
                value: newPass,
                type: 'password',
                endAdornment: (
                  <InputAdornment position="end">
                    <Lock className={classes.inputIconsColor} />
                  </InputAdornment>
                ),
                autoComplete: 'off',
              }}
            />
            <CustomInput
              labelText="Confirm new password"
              id="pass"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                onChange: (val) => setConfirmNewPass(val.target.value),
                value: confirmNewPass,
                type: 'password',
                endAdornment: (
                  <InputAdornment position="end">
                    <Lock className={classes.inputIconsColor} />
                  </InputAdornment>
                ),
                autoComplete: 'off',
              }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="dark" onClick={() => setUpdatePasswordModal(false)}>
            Cancel
          </Button>
          <Button loading={loading} color="dark" onClick={() => changePassword()}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
