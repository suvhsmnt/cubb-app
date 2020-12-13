import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import { Scrollbars } from 'react-custom-scrollbars';

const Scrollbar = {
  thumb_vertical: {
    position: 'relative',
    display: 'block',
    width: '100px',
    height: '100px',

    borderRadius: '5px',
    backgroundColor: '#4caf50',
  },
  track_vertical: {
    position: 'absolute',
    width: '6px',
    right: '2px',
    bottom: '2px',
    top: '2px',
    borderRadius: '3px',
  },
};

export default function ScrollBar(props) {
  const { height, width, children } = props;
  return (
    <Scrollbars
      autoHideTimeout={1000}
      autoHideDuration={300}
      renderThumbVertical={(props) => <div {...props} style={Scrollbar.thumb_vertical} />}
      renderTrackVertical={(props) => <div {...props} style={Scrollbar.track_vertical} />}
      renderThumbHorizontal={(props) => <div {...props} style={Scrollbar.thumb_vertical} />}
      renderTrackHorizontal={(props) => <div {...props} style={Scrollbar.track_vertical} />}
      autoHide
      width={'400'}
      style={{ height: height, width: '100%' }}
    >
      {children}
    </Scrollbars>
  );
}
