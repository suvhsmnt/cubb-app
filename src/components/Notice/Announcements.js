import React from 'react';
// nodejs library that concatenates classes
import { makeStyles } from '@material-ui/core/styles';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardFooter from 'components/Card/CardFooter.js';
import ScrollBar from 'components/ScrollBar/ScollBar';
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import styles from 'assets/jss/material-kit-react/components/UpcomingStyle';
import pubgMobile from 'assets/img/exampleNotice.jpg';
import Slide from '@material-ui/core/Slide';
import exampleStyle from 'assets/jss/material-kit-react/views/componentsSections/exampleStyle.js';
import Rules from './Rules';
import Participate from './Participate';

const useStyles = makeStyles(styles);
const exampleUseStyle = makeStyles(exampleStyle);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
Transition.displayName = 'Transition';
export default function Announcements(props) {
  const classes = useStyles();
  const example = exampleUseStyle();
  const [rulesModal, setModalRules] = React.useState(false);
  const [participateModal, setModalParticipate] = React.useState(false);
  const [player1, setPlayer1] = React.useState('');
  return (
    <div style={{ marginBottom: 50 }}>
      <Card>
        <CardHeader color="success" className={classes.cardHeader}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={4} md={4}>
              Announcements
            </GridItem>
            {/* <GridItem xs={12} sm={4} md={4}></GridItem>
              <GridItem xs={12} sm={4} md={4}></GridItem> */}
          </GridContainer>
        </CardHeader>

        <CardBody className={classes.cardBody}>
          <GridContainer justify="center">
            <ScrollBar height={550}>
              <GridItem xs={12} sm={12} md={12}>
                <img
                  src={pubgMobile}
                  alt="..."
                  style={{ height: 1000, widows: 750 }}
                  className={example.imgRaised + ' ' + example.imgRounded + ' ' + example.imgFluid}
                />
              </GridItem>
              <br />
              <GridItem xs={12} sm={12} md={12}>
                <img
                  src={pubgMobile}
                  alt="..."
                  style={{ height: 1000, widows: 750 }}
                  className={example.imgRaised + ' ' + example.imgRounded + ' ' + example.imgFluid}
                />
              </GridItem>
              <br />
            </ScrollBar>
            {/* <GridItem xs={12} sm={4} md={4}>
              Time : 6:30 PM - 7:30 PM
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              Date : 06/07/2020
            </GridItem> */}
          </GridContainer>
        </CardBody>

        {/* <CardFooter className={classes.cardFooter}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} md={6}>
                <Rules rules={'this is  a test'} />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <Participate />
              </GridItem>
            </GridContainer>
          </CardFooter> */}
      </Card>
    </div>
  );
}
