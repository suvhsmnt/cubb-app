import React, { useEffect } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Schedule from '@material-ui/icons/Schedule';
import List from '@material-ui/icons/List';
import Download from '@material-ui/icons/CloudDownload';

// core components
import NavPills from 'components/NavPills/NavPills.js';

import styles from 'assets/jss/material-kit-react/views/componentsSections/pillsStyle.js';
import Notice from 'components/Notice/Notice';
import Announcements from 'components/Notice/Announcements';
import Events from 'components/Notice/Events';
import Attachments from 'components/Notice/Attachments';

const useStyles = makeStyles(styles);

export default function NoticeBoard(props) {
  const [notice, setNotice] = React.useState(props.notice | {});
  const classes = useStyles();

  useEffect(() => setNotice(props.notice), [props.notice]);

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <NavPills
          color="info"
          horizontal={{
            tabsGrid: { xs: 12, sm: 3, md: 2 },
            contentGrid: { xs: 12, sm: 9, md: 10 },
          }}
          tabs={[
            {
              tabButton: 'Announcements',
              tabIcon: Schedule,
              tabContent: <Announcements announcements={notice === undefined ? [] : notice.announcements} />,
            },
            {
              tabButton: 'Notice',
              tabIcon: Dashboard,
              tabContent: <Notice notices={notice === undefined ? [] : notice.notices} />,
            },
            {
              tabButton: 'Events',
              tabIcon: List,
              tabContent: <Events events={notice === undefined ? [] : notice.events} />,
            },
            {
              tabButton: 'Attachments',
              tabIcon: Download,
              tabContent: <Attachments attachments={notice === undefined ? [] : notice.attachments} />,
            },
          ]}
        />

        {/* </div> */}
      </div>
    </div>
  );
}
