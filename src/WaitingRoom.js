import React from 'react';
import MenuAppBar from './Header';
// React Icons
import {BiSend} from 'react-icons/bi';
//import Material-ui from '@material-ui';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, Link, Paper, TextField, Typography, Slider} from '@material-ui/core';
import {Column, Row, Item} from '@mui-treasury/components/flex';
// fonction
import {GetTab, SetConnecte, SetJeu, SetTab} from './index';
import {ConnectionToHost, Connexion, MyId} from './connexion';
import cx from 'clsx';
//css
import {getTheme, setTheme} from './theme';
import {useStylesLight, useStylesDark} from './css/WaitingRoomStyle'

var light;
var dark;
var classes;
var styles;

export function ChangeThemeWaiting(){
  var theme = getTheme();

  if(theme == "light") {
    classes = light;
    styles = light;
  }
  else {
    classes = dark;
    styles = dark;
  }
}

export function valueManche(value) {
  var tab = GetTab();
  tab[0].manche = value;
  SetTab(tab);
  return value;
}

export function valueTemps(value) {
  var tab = GetTab();
  tab[0].temps = value;
  SetTab(tab);
  return value;
}

export default function SignInSide() {
  light = useStylesLight();
  dark = useStylesDark();
  ChangeThemeWaiting();
  var etatjeu = "sign";

  //genration de mon ID
  const getPeerId = () => {
     var myId = MyId();
     document.getElementById("zoneId").innerHTML = "";
     document.getElementById("textAndButton").innerHTML = myId;
     SetConnecte(true);
  };

  //lance le jeu
  const start = () => {
      SetJeu();
  }

  //connexion à l'hote
  const addpool = () => {
    var id = document.getElementById("peerID").value;
    ConnectionToHost(id);
    document.getElementById("zoneId").innerHTML = "";
    document.getElementById('textAndButton').innerHTML="Connecté!";
    document.getElementById("gridJouer").innerHTML = "";
  }

  return (
    <Grid container xs={12} component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={true} sm={12} >
        <Row><MenuAppBar /></Row>
      </Grid>
      <Grid item xs={12} sm={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
         <Column p={0} gap={0} className={styles.cardjoueur}>
           <Row wrap p={2} alignItems={'baseline'} className={styles.header}>
             <Item stretched className={styles.headline}>Participant.e.s</Item>
             <Item className={styles.headline}> Score </Item>
           </Row>
           <div id="playerZone"></div>
         </Column>
         <Column p={0} gap={0} container className={classes.cardco}>
         <div id = 'zoneId' className={classes.IDstyle}>
           <Row className={classes.copyright}><i>Générez une ID pour créer une session et transmettez-là à vos ami.e.s pour qu'ils et elles s'y connectent!</i></Row>
           <Button
             type="submit"
             fullWidth
             variant="contained"
             color="primary"
             onClick={getPeerId}
           >Générer une ID</Button>
         </div>
         <div id='textAndButton' className={classes.IDstyle}>
           <TextField
             variant="outlined"
             margin="normal"
             required
             fullWidth
             id="peerID"
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
             onClick={addpool}
           >Connexion</Button>
          </div>
          </Column>
        </div>
      </Grid>
      <Grid item xs={12} sm={3} elevation={6} square className={classes.cardchat}>
        <div id="chatBox" className={classes.chatbox}></div>
          <div className="card-footer input-group">
              <input id="message"  className={classes.type_msg} placeholder="Type your message..."></input>
              <div className="input-group-append">
                  <button id="send" className={classes.send_btn} ><BiSend/></button>
              </div>
        </div>
      </Grid>
     <Grid id="gridJouer" item xs={false} sm={4} className={classes.paper}>
      <Column p={0} gap={0} container direction="row" className={classes.card}>
        <Row wrap p={2} alignItems={'baseline'} className={classes.header}>
          <Item stretched className={classes.headline}>Choisis une phase de jeu</Item>
        </Row>
        <Grid item xs={false} className = {styles.SlideGrid} justify="center">
        <Typography className ={styles.slidename} id="discrete-slider" gutterBottom>
          Temps
        </Typography>
        <Slider
          className ={styles.slide}
          defaultValue={60}
          getAriaValueText={valueTemps}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={120}
        />
        <Typography className ={styles.slidename} id="discrete-slider" gutterBottom>
          Manche
        </Typography>
        <Slider
          className ={styles.slide}
          defaultValue={4}
          getAriaValueText={valueManche}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={10}
        />
        </Grid>
        <Button className ={styles.button}
          type="submit"
          fullWidth
          variant="contained"
          onClick={start}
          >Jouer</Button>
        </Column>
    </Grid>
  </Grid>
  );
}
