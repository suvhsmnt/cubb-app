import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

import styles from 'assets/jss/material-kit-react/views/componentsSections/completedStyle.js';

const useStyles = makeStyles(styles);

export default function History(props) {
  const { history, ...rest } = props;

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>History</h2>
            <div dangerouslySetInnerHTML={{ __html: history }}></div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
