import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Schedule from '@material-ui/icons/Schedule';
import List from '@material-ui/icons/List';
import Download from '@material-ui/icons/CloudDownload';

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import NavPills from 'components/NavPills/NavPills.js';

import styles from 'assets/jss/material-kit-react/views/componentsSections/pillsStyle.js';
import Notice from 'components/Notice/Notice';
import Announcements from 'components/Notice/Announcements';
import Events from 'components/Notice/Events';
import Attachments from 'components/Notice/Attachments';

const useStyles = makeStyles(styles);

export default function NoticeBoard(props) {
  const { ...rest } = props;
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <NavPills
          color="success"
          horizontal={{
            tabsGrid: { xs: 12, sm: 3, md: 2 },
            contentGrid: { xs: 12, sm: 9, md: 10 },
          }}
          tabs={[
            {
              tabButton: 'Announcements',
              tabIcon: Schedule,
              tabContent: <Announcements />,
            },
            {
              tabButton: 'Notice',
              tabIcon: Dashboard,
              tabContent: <Notice />,
            },
            {
              tabButton: 'Events',
              tabIcon: List,
              tabContent: <Events />,
            },
            {
              tabButton: 'Attachments',
              tabIcon: Download,
              tabContent: <Attachments />,
            },
          ]}
        />

        {/* </div> */}
      </div>
    </div>
  );
}
