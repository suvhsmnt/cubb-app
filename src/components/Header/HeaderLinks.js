/*eslint-disable*/
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons';

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';
import Button from 'components/CustomButtons/Button.js';

import styles from 'assets/jss/material-kit-react/components/headerLinksStyle.js';
import profileImage from 'assets/img/faces/avatar.jpg';
import NavStyle from 'assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js';

const useStyles = makeStyles(styles);

const useNavStyles = makeStyles(NavStyle);

export default function HeaderLinks(props) {
  const { handleBackClick } = props;
  const classes = useStyles();
  const navClasses = useNavStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button onClick={() => handleBackClick('about')} color="transparent" target="_blank" className={classes.navLink}>
          About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button onClick={() => handleBackClick('history')} color="transparent" target="_blank" className={classes.navLink}>
          History
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button onClick={() => handleBackClick('notification')} color="transparent" target="_blank" className={classes.navLink}>
          Notice Board
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button onClick={() => handleBackClick('gallary')} color="transparent" target="_blank" className={classes.navLink}>
          Gallary
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button onClick={() => handleBackClick('administration')} color="transparent" target="_blank" className={classes.navLink}>
          Administration
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button onClick={() => handleBackClick('contact')} color="transparent" target="_blank" className={classes.navLink}>
          Contact
        </Button>
      </ListItem>
    </List>
  );
}
