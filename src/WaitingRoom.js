import React from 'react';
import MenuAppBar from './Header';
import {useStyles} from './css/WaitingRoomStyle'
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import {Column, Row, Item} from '@mui-treasury/components/flex';
import {BiSend} from 'react-icons/bi';
import {SetJeu} from './index';
import {Connexion, MyId, ConnectionToHost} from './connexion';
import cx from 'clsx';

export default function SignInSide() {
  const classes = useStyles();
  const styles = useStyles();

  //genration de mon ID
  const getPeerId = () => {
     var myId = MyId();
     document.getElementById("zoneId").innerHTML = "";
     document.getElementById("textAndButton").innerHTML = myId;
  };

  //lance le jeu
  const start = () => {
      SetJeu();
  }

  //connexion à l'hote
  const addpool = () => {
    var id = document.getElementById("peerID").value;
    ConnectionToHost(id);
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
             <Item className={styles.actions}>
               Score
             </Item>
           </Row>
           <div id="playerZone"></div>
         </Column>
         <Column p={0} gap={0} container className={classes.card}>
         <div id = 'zoneId'>
         <Button
           type="submit"
           fullWidth
           variant="contained"
           color="primary"
           onClick={getPeerId}
         >Générer une ID</Button>
         </div>
         <div id='textAndButton'>
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
        <div id="chatBox" className="card-body"></div>
          <div className="card-footer input-group">
              <input id="message" className="form-control type_msg" placeholder="Type your message..."></input>
              <div className="input-group-append">
                  <button id="send" className="input-group-text send_btn" ><BiSend/></button>
              </div>
        </div>
      </Grid>
     <Grid item xs={false} sm={4} className={classes.paper}>
      <Column p={0} gap={0} container direction="row" className={classes.card}>
        <Row wrap p={2} alignItems={'baseline'} className={classes.header}>
          <Item stretched className={classes.headline}>Choisis une phase de jeu</Item>
        </Row>
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
