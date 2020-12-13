import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import People from '@material-ui/icons/People';
import Lock from '@material-ui/icons/Lock';
import { Link, Redirect } from 'react-router-dom';
// core components

import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardFooter from 'components/Card/CardFooter.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import { baseUrl, getAdmin } from '../../Config.js';
import http from '../../axiosInterceptor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from 'assets/jss/material-kit-react/views/loginPage.js';

const useStyles = makeStyles(styles);

export default function AdminLogin(props) {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  const [userId, setUserId] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [redirect, setRedirection] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  setTimeout(function () {
    setCardAnimation('');
  }, 700);

  const classes = useStyles();
  const { ...rest } = props;

  const login = async () => {
    setLoading(true);
    if (userId == '') {
      setLoading(false);
      toast.dark('Please enter user id !');
    } else if (userPassword == '') {
      setLoading(false);
      toast.dark('Please enter user password !');
    } else {
      try {
        const response = await http.post(baseUrl + '/api/admin/login', {
          mobileoremail: userId,
          password: userPassword,
        });

        if (response.status === 200) {
          toast.success('success');
          localStorage.setItem('token', response.data['auth-token']);
          localStorage.setItem('admin', JSON.stringify(response.data.admin));
          setLoading(false);
          setRedirection(true);
        }
        if (response.data.status === 404) {
          setLoading(false);
          toast.error(response);
        }
      } catch (error) {
        setLoading(false);
        toast.error(error.message);
      }
    }
  };

  if (getAdmin() !== null || redirect) {
    return <Redirect to="/admin-page" />;
  } else {
    return (
      <div>
        {/* <Header
        absolute
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        {...rest}
      /> */}
        <div className={classes.pageHeader}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="dark" className={classes.cardHeader}>
                      <h4>Admin Login</h4>
                      {/* <div className={classes.socialLine}>
                      <Button justIcon href="#pablo" target="_blank" color="transparent" onClick={(e) => e.preventDefault()}>
                        <i className={'fab fa-twitter'} />
                      </Button>
                      <Button justIcon href="#pablo" target="_blank" color="transparent" onClick={(e) => e.preventDefault()}>
                        <i className={'fab fa-facebook'} />
                      </Button>
                      <Button justIcon href="#pablo" target="_blank" color="transparent" onClick={(e) => e.preventDefault()}>
                        <i className={'fab fa-google-plus-g'} />
                      </Button>
                    </div> */}
                    </CardHeader>
                    {/* <p className={classes.divider}>Or Be Classical</p> */}
                    <CardBody>
                      <CustomInput
                        labelText="User ID..."
                        id="first"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          onChange: (val) => setUserId(val.target.value),
                          value: userId,
                          type: 'text',
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          onChange: (val) => setUserPassword(val.target.value),
                          value: userPassword,
                          type: 'password',
                          endAdornment: (
                            <InputAdornment position="end">
                              <Lock className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                          autoComplete: 'off',
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Link className={classes.link}>
                        <Button loading={loading} onClick={() => login()} color="dark">
                          Log In
                        </Button>
                      </Link>

                      <ToastContainer />
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          {/* <Footer whiteFont /> */}
        </div>
      </div>
    );
  }
}
