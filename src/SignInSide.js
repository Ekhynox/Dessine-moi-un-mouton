//Page de Connexion

import React from 'react';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import { makeStyles } from '@material-ui/core/styles';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import logo from './Mylogo.jpg';
import avatar1 from './1.jpg';
import avatar2 from './2.jpg';
import avatar3 from './3.jpg';
import avatar4 from './4.jpg';
import avatar5 from './5.jpg';
import avatar6 from './6.jpg';

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
    margin: theme.spacing(6, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  headline: {
    color: '#122740',
    fontSize: '2.5rem',
    fontWeight: 600,
    align: 'center',
  },
  header: {
    fontFamily: 'Barlow, san-serif',
    backgroundColor: '#fff',
  },
  card: {
    width: '92%',
    height : '92%',
    margin : theme.spacing (5, 5),
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
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
      width: '23%',
      height: '80%',
    },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <Column p={0} gap={0} className={classes.card}>
          <Row wrap p={2} alignItems={'baseline'} className={classes.header}>
            <Item stretched className={classes.headline}>Choisis un Avatar</Item>
          </Row>
          <Row alignItems={'baseline'} className={classes.avatarchoice}>
            <Avatar className={classes.large} alt="avatar1" src={avatar1} />
            <Avatar className={classes.large} alt="avatar2" src={avatar2} />
            <Avatar className={classes.large} alt="avatar3" src={avatar3} />
            <Avatar className={classes.large} alt="avatar4" src={avatar4} />
          </Row>
          <Row alignItems={'baseline'} className={classes.avatarchoice}>
            <Avatar className={classes.large} alt="avatar5" src={avatar5} />
            <Avatar className={classes.large} alt="avatar6" src={avatar6} />
            <Avatar className={classes.large} alt="avatar3" src={avatar3} />
            <Avatar className={classes.large} alt="avatar4" src={avatar4} />
          </Row>
        </Column>
      </Grid>
      <Grid item xs={12} sm={4} md={5} component={Paper} elevation={6} square>
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
