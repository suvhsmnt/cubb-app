import React from 'react';
// react component for creating beautiful carousel
import Carousel from 'react-slick';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import LocationOn from '@material-ui/icons/LocationOn';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import image from 'assets/img/faces/avatar.jpg';
import image1 from 'assets/img/bg.jpg';
import image2 from 'assets/img/bg2.jpg';
import image3 from 'assets/img/bg3.jpg';

import styles from 'assets/jss/material-kit-react/views/componentsSections/carouselStyle.js';

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image} alt="..." className={classes.imgRounded + ' ' + classes.imgFluid} />
                  <h4>Professior XYZ</h4>
                  <h6>Head Master</h6>
                </div>
                <div>
                  <img src={image} alt="..." className={classes.imgRounded + ' ' + classes.imgFluid} />
                  <h4>Professior XYZ</h4>
                  <h6>Head Master</h6>
                </div>
                <div>
                  <img src={image} alt="..." className={classes.imgRounded + ' ' + classes.imgFluid} />
                  <h4>Professior XYZ</h4>
                  <h6>Head Master</h6>
                </div>
                <div>
                  <img src={image} alt="..." className={classes.imgRounded + ' ' + classes.imgFluid} />
                  <h4>Professior XYZ</h4>
                  <h6>Head Master</h6>
                </div>
                <div>
                  <img src={image} alt="..." className={classes.imgRounded + ' ' + classes.imgFluid} />
                  <h4>Professior XYZ</h4>
                  <h6>Head Master</h6>
                </div>
                <div>
                  <img src={image} alt="..." className={classes.imgRounded + ' ' + classes.imgFluid} />
                  <h4>Professior XYZ</h4>
                  <h6>Head Master</h6>
                </div>
                <div>
                  <img src={image} alt="..." className={classes.imgRounded + ' ' + classes.imgFluid} />
                  <h4>Professior XYZ</h4>
                  <h6>Head Master</h6>
                </div>
                <div>
                  <img src={image} alt="..." className={classes.imgRounded + ' ' + classes.imgFluid} />
                  <h4>Professior XYZ</h4>
                  <h6>Head Master</h6>
                </div>
                <div>
                  <img src={image} alt="..." className={classes.imgRounded + ' ' + classes.imgFluid} />
                  <h4>Professior XYZ</h4>
                  <h6>Head Master</h6>
                </div>
                <div>
                  <img src={image} alt="..." className={classes.imgRounded + ' ' + classes.imgFluid} />
                  <h4>Professior XYZ</h4>
                  <h6>Head Master</h6>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
