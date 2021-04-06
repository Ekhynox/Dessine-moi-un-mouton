import React from 'react';
import './css/WaitingRoom.css';
//import Material-ui from '@material-ui';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from './Mylogo.jpg';
import cx from 'clsx';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import {SetJeu} from './index';
import {Connexion, MyId, ConnectionToHost} from './connexion';
import { BiSave, BiEraser, BiSend } from 'react-icons/bi';

export default function SignInSide() {
  const classes = useStyles();
  const styles = useStyles();

  const getPeerId = () => {
     var abc = MyId();
     console.log(abc);
     document.getElementById("zoneId").innerHTML = abc;
     //document.getElementById("textAndButton").innerHTML = "";
  };

  const start = () => {
      var id = document.getElementById("peerID").value;
      console.log(id.value);
      SetJeu();
      setTimeout(() => { Connexion(id); }, 1000); //PROMISE !! /!\ !!
  }

  const addpool = () => {
    var id = document.getElementById("peerID").value;
    ConnectionToHost(id);
    //document.getElementById("zoneId").innerHTML = "";
    //document.getElementById("textAndButton").innerHTML = "";
  }

  return (
    <Grid container xs={12} component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
         <Column p={0} gap={0} className={styles.cardjoueur}>
           <Row wrap p={2} alignItems={'baseline'} className={styles.header}>
             <Item stretched className={styles.headline}>Participant.e.s</Item>
             <Item className={styles.actions}>
               Score
             </Item>
           </Row>
           <div id="playerZone">
             <PersonItem name={'Amber Matthews'} src={'https://i.pravatar.cc/300?img=10'} />
             <Divider variant={'middle'} className={styles.divider} />
           </div>
         </Column>
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

export const PersonItem = ({ src, name}) => {
  //const avatarStyles = useDynamicAvatarStyles({ size: 56 });
  return (
    <Row gap={2} p={2.5}>
      <Item>
        <Avatar src={src} />
      </Item>
      <Row wrap grow gap={0.5} minWidth={0}>
        <Item grow minWidth={0}>
          <div>{name}</div>
        </Item>
      </Row>
    </Row>
  );
};

/*
███████ ████████ ██    ██ ██      ███████ 
██         ██     ██  ██  ██      ██      
███████    ██      ████   ██      █████ 
     ██    ██       ██    ██      ██    
███████    ██       ██    ███████ ███████ */

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: 'url(https://source.unsplash.com/collection/24051068/)',
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

  cardjoueur: {
    width: '100%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    fontSize: '1.25rem',
    fontWeight: 600,
    flexWrap: 'wrap',
  },

  card: {
    width: '92%',
    height : '92%',
    margin : theme.spacing (5, 5),
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    display : 'flex',
    background:'rgba(240, 160, 240, 0.30)',
  },

  cardchat: {
    margin: theme.spacing(8, 2),
    width: '90%',
    height: '80%',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    background:'rgba(240, 160, 240, 0.30)',
    overflow: 'auto',
  },

  headline: {
    color: '#122740',
    fontSize: '1.25rem',
    fontWeight: 600,
  },

  header: {
    fontFamily: 'Barlow, san-serif',
    backgroundColor: '#fff',
  },

  button : {
    fontFamily: 'Barlow, san-serif',
    background: 'linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #8B00FF)',
    borderRadius: 3,
    border: 0,
    width: '30%',
    height: '10%',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin : theme.spacing ('auto', 'auto'),
  },

  buttongrid: {
    fontFamily: 'Barlow, san-serif',
    background: 'linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #8B00FF)',
    borderRadius: 3,
    border: 0,
    width: '30%',
    height: '30%',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },

}));
