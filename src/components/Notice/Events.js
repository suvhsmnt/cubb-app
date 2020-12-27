import React, { useEffect } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardFooter from 'components/Card/CardFooter.js';
import ScrollBar from 'components/ScrollBar/ScollBar';
import { ToastContainer, toast } from 'react-toastify';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

export default function Events(props) {
  const [events, setEvents] = React.useState(props.events);

  useEffect(() => {
    setEvents(props.events);
  }, [props.events]);

  return (
    <ScrollBar height={550}>
      <ToastContainer />
      {events != undefined &&
        events.map((event) => (
          <div style={{ marginBottom: 50 }}>
            <Card>
              <CardHeader color="custom">
                <div style={{ textAlign: 'center' }}>{event.title}</div>
              </CardHeader>
              <CardBody>
                <div style={{ textAlign: 'center' }}> {event.description}</div>
              </CardBody>

              <CardFooter>
                <GridContainer xs={12} sm={12} md={12} lg={12} alignContent="center" alignItems="center" justify="center">
                  <GridItem xs={12} sm={12} md={6} lg={6} alignContent="center" alignItems="center" justify="center">
                    <div style={{ textAlign: 'center' }}> Time : {event.time}</div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} lg={6}>
                    <div style={{ textAlign: 'center' }}> Place : {event.place}</div>
                  </GridItem>
                </GridContainer>
              </CardFooter>
            </Card>
          </div>
        ))}
    </ScrollBar>
  );
}
