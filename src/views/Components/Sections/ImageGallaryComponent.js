import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

import styles from 'assets/jss/material-kit-react/views/componentsSections/typographyStyle.js';

const useStyles = makeStyles(styles);
export default function ImageGallaryComponent(props) {
  const classes = useStyles();
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [gallary, setGallary] = React.useState(props.notices === gallary ? [] : props.gallary);

  useEffect(() => {
    setGallary(props.gallary);
  }, [props.gallary]);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  };

  const settingsThumbs = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px',
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: true,
          slidesToShow: 2,
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
        <div className="slider-wrapper">
          <Slider {...settingsMain} asNavFor={nav2} ref={(slider) => setSlider1(slider)}>
            {gallary != undefined &&
              gallary.map((slide) => (
                <div className="slick-slide" key={slide.id}>
                  <h2 className="slick-slide-title">{slide.title}</h2>
                  <img className="slick-slide-image" src={slide.link} />
                </div>
              ))}
          </Slider>
        </div>
        <div className="thumbnail-slider-wrap">
          <Slider {...settingsThumbs} asNavFor={nav1} ref={(slider) => setSlider2(slider)}>
            {gallary != undefined &&
              gallary.map((slide) => (
                <div className="slick-slide" key={slide.id}>
                  <img className="slick-slide-image" src={slide.link} />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
