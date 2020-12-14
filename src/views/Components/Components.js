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
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem.js';
import History from './School/History';
import Parallax from 'components/Parallax/Parallax.js';
// sections for this page
import HeaderLinks from 'components/Header/HeaderLinks.js';
import NoticeBoard from './Sections/NoticeBoard';
import SectionAdministration from './Sections/SectionAdministration.js';
import ImageGallaryComponent from './Sections/ImageGallaryComponent';
import styles from 'assets/jss/material-kit-react/views/components.js';
import http from '../../axiosInterceptor';
import About from './School/About';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <ToastContainer position="top-center" newestOnTop={true} />
      <Header
        handleBackClick={onButtonClick}
        brand={data.name}
        rightLinks={<HeaderLinks handleBackClick={onButtonClick} />}
        fixed
        color="warning"
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
          <About about={data.about} />
        </div>
        <div ref={history}>
          <History history={data.history} />
        </div>
        <div ref={notification}>
          <NoticeBoard notice={data.notice} />
        </div>
        <div ref={gallary}>
          <ImageGallaryComponent />
        </div>
        <div ref={administration}>
          <SectionAdministration />
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
