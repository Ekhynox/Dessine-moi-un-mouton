import React from 'react';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import logo from './Mylogo.jpg';
import avatar1 from './1.jpg';
import avatar2 from './2.jpg';
import avatar3 from './3.jpg';
import avatar4 from './4.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  avatarchoice: {
      display: 'flex',
      '& > *': {
      margin: theme.spacing(1),
      },
    },

    medium: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },

    large: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },

}));


export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
      <div className={classes.avatarchoice}>
        <Avatar className={classes.large} alt="avatar1" src={avatar1} />
        <Avatar className={classes.large} alt="avatar2" src={avatar2} />
        <Avatar className={classes.large} alt="avatar3" src={avatar3} />
        <Avatar className={classes.large} alt="avatar4" src={avatar4} />
      </div>
      <div className={classes.avatarchoice}>
        <Avatar className={classes.large} alt="avatar4" src={avatar4} />
      </div>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <Avatar className={classes.medium} src={logo} alt="My logo" />
        <p></p>
        <h1> Dessine Moi Un Mouton</h1>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Pseudo"
              label="Pseudo"
              name="Pseudo"
              autoComplete="Pseudo"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="HostId"
              label="Host_Id"
              name="HostId"
              autoComplete="Host_Id"
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>

          </form>
        </div>
        </Grid>
    </Grid>
  );
}
