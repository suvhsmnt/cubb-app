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
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Rules(props) {
  const { rules } = props;
  const classes = useStyles();
  const [rulesModal, setModalRules] = React.useState(false);

  return (
    <div>
      <Button color="dark" onClick={() => setModalRules(true)}>
        Rules
      </Button>
      <Dialog
        classes={{
          root: classes.top,
          paper: classes.modal,
        }}
        open={rulesModal}
        TransitionComponent={Transition}
        keepMounted
        scroll="paper"
        onClose={() => setModalRules(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle id="classic-modal-slide-title" disableTypography className={classes.modalHeader}>
          <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setModalRules(false)}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          <h4 className={classes.modalTitle}>Rules</h4>
        </DialogTitle>
        <DialogContent id="classic-modal-slide-description" className={classes.modalBody}>
          <p>{rules}</p>
        </DialogContent>
        <DialogActions className={classes.modalFooter}>
          <Button onClick={() => setModalRules(false)} color="danger" simple>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
