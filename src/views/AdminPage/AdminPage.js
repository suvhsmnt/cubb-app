import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Schedule from '@material-ui/icons/Schedule';
import List from '@material-ui/icons/List';
import { Redirect } from 'react-router-dom';

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import NavPills from 'components/NavPills/NavPills.js';
import ChangePassword from '../AdminPage/ChangePassword';
import styles from 'assets/jss/material-kit-react/views/componentsSections/pillsStyle.js';
import downloadStyle from 'assets/jss/material-kit-react/views/componentsSections/downloadStyle.js';
import AdminHeader from './AdminHeader';
import AdminHeaderLinks from './AdminHeaderLinks';
import AddTournament from '../AdminPage/AddTournament';
import { baseUrl, chekAdminAuth, getAdmin } from '../../Config.js';

const useStyles = makeStyles(styles);
const downloadStyles = makeStyles(downloadStyle);

export default function AdminPage(props) {
  const { ...rest } = props;
  const classes = useStyles();
  const classes1 = downloadStyles();
  const admin = getAdmin();

  if (admin === null) {
    return <Redirect to="/admin-login" />;
  } else {
    return (
      <div className={classes.section}>
        <AdminHeader
          color="dark"
          brand="Black Night ☺"
          rightLinks={<AdminHeaderLinks name={admin.emailId} />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'dark',
          }}
          {...rest}
        />
        <div className={classes.container}>
          {/* <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Navigation Pills</h3>
          </div>
          <div className={classes.title}>
            <h3>
              <small>With Icons</small>
            </h3>
          </div> */}
          <br />
          <div className={classes1.textCenter}>
            <GridContainer justify="center">
              <AddTournament />
              <ChangePassword name={admin.emailId} />
              <AddTournament />
            </GridContainer>
          </div>

          <NavPills
            color="dark"
            horizontal={{
              tabsGrid: { xs: 12, sm: 3, md: 2 },
              contentGrid: { xs: 12, sm: 9, md: 10 },
            }}
            tabs={[
              {
                tabButton: 'Dashboard',
                tabIcon: Dashboard,
                tabContent: (
                  <p>
                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                  </p>
                ),
              },
              {
                tabButton: 'Schedule',
                tabIcon: Schedule,
                tabContent: (
                  <span>
                    <p>
                      Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for
                      real-time schemas.
                    </p>
                    <br />
                    <p>
                      Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer
                      directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play
                      networks. Dynamically procrastinate B2C users after installed base benefits.
                    </p>
                  </span>
                ),
              },
              {
                tabButton: 'Tasks',
                tabIcon: List,
                tabContent: (
                  <span>
                    <p>
                      Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after
                      installed base benefits.
                    </p>
                    <br />
                    <p>
                      Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered
                      markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                    </p>
                    <br />
                    <p>
                      Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered
                      markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                    </p>
                  </span>
                ),
              },
            ]}
          />
          {/* </div> */}
        </div>
      </div>
    );
  }
}
