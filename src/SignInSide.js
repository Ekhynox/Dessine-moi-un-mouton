//Page de Connexion
import React from 'react';
import ReactDOM from 'react-dom';
import {useStylesLight, useStylesDark, ValidationTextField} from './css/SignInSideStyle'
import MenuAppBar from './Header';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControl, FormControlLabel, Grid, Link, Paper, TextField, Typography} from '@material-ui/core';
import {Column, Row, Item} from '@mui-treasury/components/flex';
import {ConnectionToHost} from './connexion';
import {SetWaiting, SetPlayer, PlayerPool, AddInTab, GetPlayer, GetTab, getTheme, setTheme} from './index';
import logo from './img/Mylogo.jpg';
import avatar1 from './img/1.jpg';
import avatar2 from './img/2.jpg';
import avatar3 from './img/3.jpg';
import avatar4 from './img/4.jpg';
import avatar5 from './img/5.jpg';
import avatar6 from './img/6.jpg';
import avatar7 from './img/7.jpg';
import avatar8 from './img/8.jpg';

var light;
var dark;
var classes;

export function ChangeThemeSign(){
  var theme = getTheme();

  if(theme == "light") {
    classes = light;
    console.log("change theme light");
  }
  else {
    classes = dark;
    console.log("change theme dark");
  }
}

export default function SignInSide() {
  light = useStylesLight();
  dark = useStylesDark();
  ChangeThemeSign();
  var etatjeu = "sign";

  //Creation de l'objet joueur
  var player = GetPlayer();

//Change le logo en l'avatar choisi par le joueur
const ChangeAvatar = (img) => {
   document.getElementById('logo').innerHTML ='<img alt='+ img.target.alt +' src= "' + img.target.src + '" class="MuiAvatar-img">';
   player.avatar = img.target.src;
   SetPlayer(player);
};

 //lorsque l'on clic sur connexion
 //Recupere le pseudos du joueurs et l'ajoute l'objet joueur.
 //Sauvegarde en local le joueurs puis l'ajoute dans le tableau de joueurs.
 //Puis affiche la page de waiting room.
 const start = () => {
   if((document.getElementById('pseudos').value != "")){
     player.pseudos = document.getElementById("pseudos").value;
     SetPlayer(player);
     AddInTab(player);
     SetWaiting();
   }
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
            <Avatar onClick={ChangeAvatar} className={classes.large} alt="avatar1" src={avatar1} />
            <Avatar onClick={ChangeAvatar} item className={classes.large} alt="avatar2" src={avatar2} />
            <Avatar onClick={ChangeAvatar} item className={classes.large} alt="avatar3" src={avatar3} />
            <Avatar onClick={ChangeAvatar} item className={classes.large} alt="avatar4" src={avatar4} />
          </Row>
          <Row alignItems={'baseline'} className={classes.avatarchoice}>
            <Avatar onClick={ChangeAvatar} className={classes.large} alt="avatar5" src={avatar5} />
            <Avatar onClick={ChangeAvatar} className={classes.large} alt="avatar6" src={avatar6} />
            <Avatar onClick={ChangeAvatar} className={classes.large} alt="avatar7" src={avatar7} />
            <Avatar onClick={ChangeAvatar} className={classes.large} alt="avatar8" src={avatar8} />
          </Row>
          <Row flexDirection={'row-reverse'} className={classes.copyright}><p>All righs reserved to <b><i>PlaceIt!</i></b></p></Row>
        </Column>
      </Grid>
      <Grid item xs={12} sm={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <h1> Dessine Moi Un Mouton</h1>
          <Avatar id="logo" className={classes.medium} src={logo} alt="My logo" />
          <ValidationTextField
           className = {classes.form}
            label="Pseudo"
            required
            variant="outlined"
            id="pseudos"
          />
          <Button
              className = {classes.submit}
              fullWidth
              variant="contained"
              color="primary"
              onClick={start}
          >Connexion</Button>
        </div>
      </Grid>
    </Grid>
  );
}
