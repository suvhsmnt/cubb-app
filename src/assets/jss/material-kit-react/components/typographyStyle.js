import { defaultFont, primaryColor, infoColor, successColor, warningColor, dangerColor } from 'assets/jss/material-kit-react.js';

const typographyStyle = {
  defaultFontStyle: {
    ...defaultFont,
    fontSize: '14px',
  },
  defaultHeaderMargins: {
    marginTop: '20px',
    marginBottom: '10px',
  },
  quote: {
    fontSize: '17.5px',
  },
  quoteText: {
    fontStyle: 'italic',
    fontSize: '120%',
    textAlign: 'justify',
  },
  quoteAuthor: {
    textAlign: 'right',
    display: 'block',
    fontSize: '95%',
    lineHeight: '1.42857143',
    color: '#777',
  },
  mutedText: {
    color: '#777',
  },
  primaryText: {
    color: primaryColor,
  },
  infoText: {
    color: infoColor,
  },
  successText: {
    color: successColor,
  },
  warningText: {
    color: warningColor,
  },
  dangerText: {
    color: dangerColor,
  },
  smallText: {
    fontSize: '65%',
    fontWeight: '400',
    lineHeight: '1',
    color: '#777',
  },
};

export default typographyStyle;
