import React, { useEffect } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardFooter from 'components/Card/CardFooter.js';
import ScrollBar from 'components/ScrollBar/ScollBar';
import { ToastContainer, toast } from 'react-toastify';
import firebase from '../../Firebase';

export default function Events(props) {
  const [events, setEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const ref = firebase.firestore().collection('Events').where('type', '==', 'EVENT');

  const getEvents = () => {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setEvents(items);
      setLoading(false);
    });
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <ScrollBar height={550}>
      <ToastContainer />
      {events.map((event) => (
        <div style={{ marginBottom: 50 }}>
          <Card>
            <CardHeader color="success">{event.title}</CardHeader>
            <CardBody>{event.description}</CardBody>
            <CardFooter>Time : {event.time.toDate().toDateString()}</CardFooter>
          </Card>
        </div>
      ))}
    </ScrollBar>
  );
}
