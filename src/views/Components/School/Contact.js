/*eslint-disable*/
import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
// core components
import styles from 'assets/jss/material-kit-react/views/componentsSections/downloadStyle.js';

const useStyles = makeStyles(styles);

export default function Contact(props) {
  const classes = useStyles();
  const [contacts, setContacts] = React.useState(props.contacts === undefined ? {} : props.contacts);

  React.useEffect(() => {
    setContacts(props.contacts);
  }, [props.contacts]);
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Contact Us</h2>
            <h4>Phone number: {contacts != undefined ? contacts.phoneNumber : null}</h4>
            <h4>Email: {contacts != undefined ? contacts.emailId : null}</h4>
            <h4>Address: {contacts != undefined ? contacts.address : null}</h4>
            <h4>Pincode: {contacts != undefined ? contacts.pinCode : null}</h4>
          </GridItem>
        </GridContainer>

        {/* <div className={classes.textCenter + ' ' + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>Thank you for supporting us!</h3>
          </GridContainer>
          <Button color="twitter">
            <i className={classes.socials + ' fab fa-twitter'} /> Tweet
          </Button>
          <Button color="facebook">
            <i className={classes.socials + ' fab fa-facebook-square'} /> Share
          </Button>
          <Button color="google">
            <i className={classes.socials + ' fab fa-google-plus-g'} />
            Share
          </Button>
          <Button color="github">
            <i className={classes.socials + ' fab fa-github'} /> Star
          </Button>
        </div> */}
      </div>
    </div>
  );
}
