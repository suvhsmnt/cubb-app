import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import styles from 'assets/jss/material-kit-react/views/componentsSections/typographyStyle.js';

import image from 'assets/img/faces/avatar.jpg';
const useStyles = makeStyles(styles);
export default function SectionAdministration() {
  const classes = useStyles();
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

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
          slidesToShow: 3,
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
      title: 'repellendus id ullam',
      label: 'Dolorem officiis temporibus.',
    },
    {
      id: 2,
      title: 'excepturi consequatur est',
      label: 'Officia non provident dolor esse et neque.',
    },
    {
      id: 3,
      title: 'eius doloribus blanditiis',
      label: 'Ut recusandae vel vitae molestiae id soluta.',
    },
    {
      id: 4,
      title: 'nihil voluptates delectus',
      label: 'Qui vel consequatur recusandae illo repellendus.',
    },
    {
      id: 5,
      title: 'nemo dolorem necessitatibus',
      label: 'Placeat odit velit itaque voluptatem.',
    },
    {
      id: 6,
      title: 'dolorem quibusdam quasi',
      label: 'Adipisci officiis repudiandae.',
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
          {slidesData.map((slide) => (
            <div className="slick-slide pad" key={slide.id}>
              <img src={image} alt="..." className={classes.imgRounded + ' ' + classes.imgFluid} />
              <h6 className="slick-slide-title">Professor XYZ</h6>
              <h6 className="slick-slide-title">Head Master</h6>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
