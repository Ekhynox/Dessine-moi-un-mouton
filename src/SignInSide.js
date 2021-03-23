//Page de Connexion

import React from 'react';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Column, Row, Item} from '@mui-treasury/components/flex';
import {CoWaitingRoom} from './connexion';
import {SetWaiting, SetPlayer} from './index';
import { makeStyles } from '@material-ui/core/styles';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import logo from './Mylogo.jpg';
import avatar1 from './img/1.jpg';
import avatar2 from './img/2.jpg';
import avatar3 from './img/3.jpg';
import avatar4 from './img/4.jpg';
import avatar5 from './img/5.jpg';
import avatar6 from './img/6.jpg';


export default function SignInSide() {
  const classes = useStyles();

  var players = {
    etat: "viewer",
    pseudos: "",
    avatar: "",
    peerID: "",
    score: "",
   }

 const changeAvatar = (img) => {
   document.getElementById('logo').innerHTML ='<img alt='+ img.target.alt +' src= "' + img.target.src + '" class="MuiAvatar-img">';
   players.avatar = img.target.src;
 };

 const player = () => {
    players.pseudos = document.getElementById("pseudos").value
    console.log(players);
    SetPlayer(players)
    SetWaiting();
  }

  return (
    <Grid container xs={12} component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={8} container direction="row" className={classes.image}>
        <Column p={0} gap={0} container className={classes.card}>
          <Row wrap p={2} alignItems={'baseline'} className={classes.header}>
            <Item stretched className={classes.headline}>Choisis un Avatar</Item>
          </Row>
          <Row alignItems={'flex'} container xs={12}  sm={3} className={classes.avatarchoice}>
            <Avatar onClick={changeAvatar} className={classes.large} alt="avatar1" src={avatar1} />
            <Avatar onClick={changeAvatar} item className={classes.large} alt="avatar2" src={avatar2} />
            <Avatar onClick={changeAvatar} item className={classes.large} alt="avatar3" src={avatar3} />
            <Avatar onClick={changeAvatar} item className={classes.large} alt="avatar4" src={avatar4} />
          </Row>
          <Row alignItems={'baseline'} className={classes.avatarchoice}>
            <Avatar onClick={changeAvatar} className={classes.large} alt="avatar5" src={avatar5} />
            <Avatar onClick={changeAvatar} className={classes.large} alt="avatar6" src={avatar6} />
            <Avatar onClick={changeAvatar} className={classes.large} alt="avatar3" src={avatar3} />
            <Avatar onClick={changeAvatar} className={classes.large} alt="avatar4" src={avatar4} />
          </Row>
          <Row flexDirection={'row-reverse'} className={classes.copyright}><p>All righs reserved to <b><i>PlaceIt!</i></b></p></Row>
        </Column>
      </Grid>
      <Grid item xs={12} sm={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <h1> Dessine Moi Un Mouton</h1>
          <Avatar id="logo" className={classes.medium} src={logo} alt="My logo" />
          <Typography component="h1" variant="h5">
            <h3 id="show-peer"></h3>
          </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="pseudos"
              label="Pseudo"
              name="Pseudo"
              autoComplete="Pseudo"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={player}
            >
              Connexion
            </Button>

        </div>
        </Grid>
    </Grid>
  );
}

/*
███████ ████████ ██    ██ ██      ███████ 
██         ██     ██  ██  ██      ██      
███████    ██      ████   ██      █████ 
     ██    ██       ██    ██      ██    
███████    ██       ██    ███████ ███████ */


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },

  image: {
    backgroundImage: 'url(https://source.unsplash.com/collection/24051068/)',
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
      width: '50%',
      height: '70%',
    },
    large: {
      width: '23%',
      height: '80%',
    },

    copyright: {
      fontFamily: 'Barlow, san-serif',
      color: 'white',
      margin: theme.spacing (3, 2),
    },
}));
