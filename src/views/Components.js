import React, { useRef, useEffect } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem.js';
import History from './School/History';
import Parallax from 'components/Parallax/Parallax.js';
// sections for this page
import HeaderLinks from 'components/Header/HeaderLinks.js';
import NoticeBoard from './Sections/NoticeBoard';
import SectionAdministration from './Sections/SectionAdministration.js';
import ImageGallaryComponent from './Sections/ImageGallaryComponent';
import styles from 'assets/jss/material-kit-react/views/components.js';
import http from '../axiosInterceptor';
import About from './School/About';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Faculty from './School/Faculty';
import Contact from './School/Contact';

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [data, setData] = React.useState({});
  const about = React.useRef(null);
  const history = React.useRef(null);
  const notification = React.useRef(null);
  const gallary = React.useRef(null);
  const administration = React.useRef(null);
  const faculty = React.useRef(null);
  const contact = React.useRef(null);

  const loadData = async () => {
    try {
      const response = await http.get('https://api.npoint.io/92d107897b2ef3446be6');
      if (response.status === 200) {
        setData(response.data);
      }
      if (response.data.status === 404) {
        toast.error(response);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const onButtonClick = (to) => {
    if (to === 'about') {
      about.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else if (to === 'history') {
      history.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else if (to === 'notification') {
      notification.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else if (to === 'gallary') {
      gallary.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else if (to === 'administration') {
      administration.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else if (to === 'faculty') {
      faculty.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else if (to === 'contact') {
      contact.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <ToastContainer position="top-center" newestOnTop={true} />
      <Header
        handleBackClick={onButtonClick}
        brand={
          <div>
            <GridContainer alignContent="center" alignItems="center" justify="center">
              <GridItem xs={4} sm={4} md={4} lg={2} alignContent="center" alignItems="center" justify="center">
                <img src={data.logo} alt="logo" style={{ height: 55, width: 55 }} />
                {/* <Avatar alt="Remy Sharp" src={data.logo} className={classes.large} /> */}
              </GridItem>
              <GridItem xs={8} sm={8} md={8} lg={10} alignContent="center" alignItems="center" justify="center">
                {data.name}
              </GridItem>
            </GridContainer>
          </div>
        }
        rightLinks={<HeaderLinks handleBackClick={onButtonClick} />}
        color="info"
        fixed
        handleBackClick={onButtonClick}
        changeColorOnScroll={{
          height: 350,
          color: 'white',
        }}
        {...rest}
      />

      <Parallax image={require('assets/img/bg1211.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                {/* <h1 className={classes.title}>Black Knight☺</h1>
                <h3 className={classes.subtitle}>Winner winner chicken dinner☺☺♥♥☺☺.</h3> */}
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div ref={about}>
          <br />
          <About about={data.about} />
        </div>

        <div ref={history}>
          <br />
          <History history={data.history} />
        </div>
        <div ref={notification}>
          <br />
          <NoticeBoard notice={data.notice} />
        </div>
        <div ref={gallary}>
          <br />
          <ImageGallaryComponent gallary={data.gallary} />
        </div>
        <div ref={administration}>
          <br />
          <SectionAdministration administration={data.administration} />
        </div>
        <div ref={faculty}>
          <br />
          <Faculty faculties={data.faculty} />
        </div>
        <div ref={contact}>
          <br />
          <Contact contacts={data.contact} />
        </div>

        {/* <SectionPills /> */}
        {/* <SectionJavascript /> */}
        {/* <SectionTabs /> */}
        {/* <SectionNavbars /> */}
        {/* <SectionNotifications /> */}
        {/*  <SectionNavbars />
        <SectionTabs />
        <SectionPills />
    
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />*/}
        {/* <SectionCompletedExamples /> */}
        {/* <SectionLogin /> */}
        {/* <GridItem md={12} className={classes.textCenter}>
          <Link to={'/login-page'} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem> */}
        {/* <SectionExamples /> */}
        {/* <SectionDownload /> */}
      </div>
      <Footer />
    </div>
  );
}
