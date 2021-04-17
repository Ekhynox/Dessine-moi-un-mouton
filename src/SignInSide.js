//Page de Connexion
import React from 'react';
import {useStyles} from './css/SignInSideStyle'
import MenuAppBar from './Header';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, Link, Paper, TextField, Typography} from '@material-ui/core';
import {Column, Row, Item} from '@mui-treasury/components/flex';
import {ConnectionToHost} from './connexion';
import {SetWaiting, SetPlayer, PlayerPool, AddInTab, GetTab} from './index';
import logo from './img/Mylogo.jpg';
import avatar1 from './img/1.jpg';
import avatar2 from './img/2.jpg';
import avatar3 from './img/3.jpg';
import avatar4 from './img/4.jpg';
import avatar5 from './img/5.jpg';
import avatar6 from './img/6.jpg';
import avatar7 from './img/7.jpg';
import avatar8 from './img/8.jpg';

export default function SignInSide() {
  const classes = useStyles();

  //Creation de l'objet joueur
  var players = {
    etat: "host",
    pseudos: "",
    avatar: "",
    peerID: "",
    score: 0,
    co: false,
    msg: false,
    canvas : true,
    mot: "",
   }

  //Change le logo en l'avatar choisi par le joueur
 const changeAvatar = (img) => {
   document.getElementById('logo').innerHTML ='<img alt='+ img.target.alt +' src= "' + img.target.src + '" class="MuiAvatar-img">';
   players.avatar = img.target.src;
 };

 //lorsque l'on clic sur connexion
 //Recupere le pseudos du joueurs et l'ajoute l'objet joueur.
 //Sauvegarde en local le joueurs puis l'ajoute dans le tableau de joueurs.
 //Puis affiche la page de waiting room.
 const player = () => {
    players.pseudos = document.getElementById("pseudos").value
    SetPlayer(players);
    AddInTab(players);
    SetWaiting();
  }

  return (
    <Grid container xs={12} component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={true} sm={12} >
        <Row><MenuAppBar /></Row>
      </Grid>

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
            <Avatar onClick={changeAvatar} className={classes.large} alt="avatar7" src={avatar7} />
            <Avatar onClick={changeAvatar} className={classes.large} alt="avatar8" src={avatar8} />
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
          >Connexion</Button>
        </div>
      </Grid>
    </Grid>
  );
}
