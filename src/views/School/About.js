import React, { useEffect } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

import styles from 'assets/jss/material-kit-react/views/componentsSections/completedStyle.js';
import stylestypo from 'assets/jss/material-kit-react/views/componentsSections/typographyStyle.js';
import Quote from 'components/Typography/Quote.js';
const useStylesTypo = makeStyles(stylestypo);
const useStyles = makeStyles(styles);

export default function About(props) {
  const [about, setAbout] = React.useState(props.about);

  useEffect(() => setAbout(props.about), [props.about]);
  const classesTypo = useStylesTypo();
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>About Us</h2>

            {/* <Quote text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at." /> */}

            {about != undefined && about.para.map((each) => <Quote text={each.article} />)}
            {about != undefined && <Quote author={about.author} />}
            {about != undefined && <Quote author={about.designation} />}
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
