import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import styles from 'assets/jss/material-kit-react/views/componentsSections/typographyStyle.js';

import image from 'assets/img/faces/avatar.jpg';
const useStyles = makeStyles(styles);
export default function SectionAdministration(props) {
  const classes = useStyles();
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [administration, setAdministration] = React.useState(props.administration === undefined ? [] : props.administration);

  useEffect(() => {
    setAdministration(props.administration);
  }, [props.administration]);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settingsThumbs = {
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '8px',
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: true,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  const slidesData = [
    {
      id: 1,
      name: 'repellendus id ullam',
      designation: 'repellendus id ullam',
      qualification: 'Dolorem officiis temporibus.',
      link: 'https://picsum.photos/400/400?img=4',
    },
    {
      id: 2,
      name: 'repellendus id ullam',
      designation: 'repellendus id ullam',
      qualification: 'Dolorem officiis temporibus.',
      link: 'https://picsum.photos/400/400?img=4',
    },
    {
      id: 3,
      name: 'repellendus id ullam',
      designation: 'repellendus id ullam',
      qualification: 'Dolorem officiis temporibus.',
      link: 'https://picsum.photos/400/400?img=4',
    },
    {
      id: 4,
      name: 'repellendus id ullam',
      designation: 'repellendus id ullam',
      qualification: 'Dolorem officiis temporibus.',
      link: 'https://picsum.photos/400/400?img=4',
    },
    {
      id: 5,
      name: 'repellendus id ullam',
      designation: 'repellendus id ullam',
      qualification: 'Dolorem officiis temporibus.',
      link: 'https://picsum.photos/400/400?img=4',
    },
    {
      id: 6,
      name: 'repellendus id ullam',
      designation: 'repellendus id ullam',
      qualification: 'Dolorem officiis temporibus.',
      link: 'https://picsum.photos/400/400?img=4',
    },
  ];
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Administration</h2>
        </div>
        <br />

        <Slider {...settingsThumbs} asNavFor={nav1} ref={(slider) => setSlider2(slider)}>
          {administration != undefined &&
            administration.map((slide) => (
              /* {slidesData.map((slide) => ( */
              <div className="slick-slide pad" key={slide.id}>
                <img src={slide.link} alt="..." className={classes.imgRounded + ' ' + classes.imgFluid} />
                <h6 className="slick-slide-title">{slide.name}</h6>
                <h6 className="slick-slide-title">{slide.designation}</h6>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}
