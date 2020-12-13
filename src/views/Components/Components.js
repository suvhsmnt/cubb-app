import React, { useRef } from 'react';
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

import Parallax from 'components/Parallax/Parallax.js';
// sections for this page
import HeaderLinks from 'components/Header/HeaderLinks.js';
import SectionBasics from './Sections/SectionBasics.js';
import NoticeBoard from './Sections/NoticeBoard';
import SectionNavbars from './Sections/SectionNavbars.js';
import SectionTabs from './Sections/SectionTabs.js';
import SectionPills from './Sections/SectionPills.js';
import SectionNotifications from './Sections/SectionNotifications.js';
import SectionTypography from './Sections/SectionTypography.js';
import SectionJavascript from './Sections/SectionJavascript.js';
import SectionCarousel from './Sections/SectionCarousel.js';
import SectionCompletedExamples from './Sections/SectionCompletedExamples.js';
import SectionLogin from './Sections/SectionLogin.js';
import SectionExamples from './Sections/SectionExamples.js';
import SectionAdministration from './Sections/SectionAdministration.js';
import SectionDownload from './Sections/SectionDownload.js';
import ImageGallaryComponent from './Sections/ImageGallaryComponent';
import styles from 'assets/jss/material-kit-react/views/components.js';
import ScrollBar from '../../components/ScrollBar/ScollBar';
const data = require('../../Data');
const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const about = React.useRef(null);
  const notification = React.useRef(null);
  const gallary = React.useRef(null);
  const top = React.useRef(null);
  const administration = React.useRef(null);

  const onButtonClick = (to) => {
    console.log(JSON.stringify(data));
    if (to === 'about') {
      about.current.scrollIntoView({
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
      console.log('test');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header
        handleBackClick={onButtonClick}
        brand={data.name}
        rightLinks={<HeaderLinks handleBackClick={onButtonClick} />}
        fixed
        color="success"
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
        {/* <SectionBasics />
        <SectionPills /> */}
        <div ref={about}>
          <SectionCompletedExamples />
        </div>

        <div ref={notification}>
          <NoticeBoard />
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
