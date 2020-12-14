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
const ref = firebase.storage().ref('school');

export default function Attachments(props) {
  const [events, setEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const ref = firebase.storage().ref().child('Attachments/').listAll();
  const jsonRef = firebase.storage().ref().child('school').getDownloadURL();

  const getData = async () => {
    const data = {};
    const response = await jsonRef.then((doc) => {
      // console.log(doc.toString());
      var httpsReference = firebase.storage().refFromURL(doc.toString());
      // console.log(httpsReference.toString());
      // data = JSON.parse(httpsReference);
      // console.log(data);
    });
  };

  const getEvents = async () => {
    setLoading(true);
    const items = [];
    const response = await ref.then((doc) => {
      doc.items.forEach((item) => {
        items.push(item);
      });
    });
    items.forEach((item) => {
      // console.log(item.name);
    });
  };

  useEffect(() => {
    getEvents();
    getData();
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
