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
import {Connexion, MyId, CoWaitingRoom} from './connexion';
import { BiSave, BiEraser, BiSend } from 'react-icons/bi';

export default function SignInSide() {
  const classes = useStyles();
  const styles = useStyles();

  const getPeerId = () => {
     var abc = MyId();
     console.log(abc);
     document.getElementById("zoneId").innerHTML = abc;
  };

  const start = () => {
    var id = document.getElementById("peerID").value;
    console.log(id.value);
    SetJeu();
    setTimeout(() => { Connexion(id); }, 1000); //PROMISE !! /!\ !!
  }

  return (
    <Grid container xs={12} component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={6} component={Paper} elevation={6} square>
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
           onClick={CoWaitingRoom}
         >Connexion</Button>
        </div>

      </Grid>
     <Grid item xs={false} sm={6} className={classes.image}>
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



const PersonItem = ({ src, name, friendCount }) => {
  const avatarStyles = useDynamicAvatarStyles({ size: 56 });
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

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },

  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
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
