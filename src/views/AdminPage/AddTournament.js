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
import AddBox from '@material-ui/icons/AddBox';
import Slide from '@material-ui/core/Slide';
import CustomInput from 'components/CustomInput/CustomInput.js';
import InputAdornment from '@material-ui/core/InputAdornment';
import People from '@material-ui/icons/People';
import btnStyles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';

const ButtonStyle = makeStyles(btnStyles);

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AddTournament(props) {
  const { rules } = props;
  const classes = useStyles();
  const btnSlasses = ButtonStyle();
  const [addTounamentModal, setAddTournamentModal] = React.useState(false);
  const [player1, setPlayer1] = React.useState('');
  return (
    <div>
      <Button color="dark" onClick={() => setAddTournamentModal(true)}>
        <AddBox className={btnSlasses.icons} /> Add Tournament
      </Button>
      <Dialog
        open={addTounamentModal}
        TransitionComponent={Transition}
        onClose={() => setAddTournamentModal(false)}
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
            onClick={() => setAddTournamentModal(false)}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          Participate
        </DialogTitle>
        <DialogContent style={{ paddingLeft: 30, paddingRight: 30 }}>
          <div className="pl-5 pr-5">
            <CustomInput
              labelText="Player ID..."
              id="first"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: 'text',
                endAdornment: (
                  <InputAdornment position="end">
                    <People className={classes.inputIconsColor} />
                  </InputAdornment>
                ),
              }}
            />
            <CustomInput
              labelText="Player ID..."
              id="first"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: 'text',
                endAdornment: (
                  <InputAdornment position="end">
                    <People className={classes.inputIconsColor} />
                  </InputAdornment>
                ),
              }}
            />
            <CustomInput
              labelText="Player ID..."
              id="first"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                onChange: (val) => setPlayer1(val.target.value),
                value: player1,
                type: 'text',
                endAdornment: (
                  <InputAdornment position="end">
                    <People className={classes.inputIconsColor} />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          {/* <FormControlLabel
                      control={
                        <Checkbox
                          tabIndex={-1}
                          onClick={() => handleToggle(22)}
                          checked={checked.indexOf(22) !== -1 ? true : false}
                          checkedIcon={<Check className={classes.checkedIcon} />}
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot,
                          }}
                        />
                      }
                      classes={{ label: classes.label, root: classes.labelRoot }}
                      label="Checked"
                    /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddTournamentModal(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => setAddTournamentModal(false)} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
