import React, { useEffect } from 'react';
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
import exampleStyle from 'assets/jss/material-kit-react/views/componentsSections/exampleStyle.js';

const useStyles = makeStyles(styles);
const exampleUseStyle = makeStyles(exampleStyle);

export default function Announcements(props) {
  const classes = useStyles();
  const example = exampleUseStyle();
  const [announcements, setAnnouncements] = React.useState(props.announcements);

  useEffect(() => {
    setAnnouncements(props.announcements);
  }, [props.announcements]);

  return (
    <ScrollBar height={550}>
      {announcements != undefined &&
        announcements.map((announcement) => (
          <div style={{ marginBottom: 50 }}>
            <Card>
              <CardHeader color="custom">{announcement.title}</CardHeader>
              <CardBody>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                    <img
                      src={announcement.link}
                      alt="..."
                      style={{ height: 1000, widows: 750 }}
                      className={example.imgRaised + ' ' + example.imgRounded + ' ' + example.imgFluid}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </div>
        ))}
    </ScrollBar>
  );
}
