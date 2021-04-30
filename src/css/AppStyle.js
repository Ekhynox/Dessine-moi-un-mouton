import { makeStyles } from '@material-ui/core/styles';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, LinearProgress, Link, Modal, Paper, TextField, Typography } from '@material-ui/core';
import {Column, Row, Item} from '@mui-treasury/components/flex';
/*
███████ ████████ ██    ██ ██      ███████ 
██         ██     ██  ██  ██      ██      
███████    ██      ████   ██      █████ 
     ██    ██       ██    ██      ██    
███████    ██       ██    ███████ ███████ */

export const useStylesLight = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: 'url(https://source.unsplash.com/collection/24051068/)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  center:{
    margin: theme.spacing('auto', 'auto'),
  },

    minuteurbox:{
    width: '100%',
    height: '100%',
    background:'rgba(240, 160, 240, 0.30)',
    margin: theme.spacing(5, 0),
    borderRadius: 16,
  },

  minuteur:{
    color: "black",
    margin: theme.spacing(0, 5),
  },

  paper: {
    margin: theme.spacing(7.5, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  canvas: {
    backgroundColor: 'rgb(255, 255, 255)',
    background: 'white',
    borderRadius: 15,
    display: 'flex',

  },

  drawbox:{
    width: "100%",
  },

  couleurs: {
    margin: theme.spacing(8, 0),
    borderRadius: 15,
    width: '5.5vh',
    height:'65vh',
    border: '3px solid black',
    background:'#222',
    borderRadius: 5,
    padding:'1vh',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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

  cardjoueur: {
    width: '100%',
    height: '75%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    fontSize: '1.5rem',
    fontWeight: 600,
    flexWrap: 'wrap',
    margin : theme.spacing (8, 2),
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
    fontSize: '1.25rem',
    fontWeight: 450,
  },

  chatbox: {
    margin: theme.spacing(1),
    width: '97%',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.25rem',
    fontWeight: 400,
    position: 'relative',
    overflow: 'auto',
    '&:hover': {
      overflowY: 'auto',
    },
  },

  styleB: {
      color: 'white',
      fontSize: '150%',
      borderRadius: 15,
      textAlign: 'center',
      width: '5.5vh',
      height:'5.5vh',
      border: '3px solid black',
      background:'#222',
      borderRadius: 5,
      marginTop: '0.5vh',
      marginLeft: '1vh',
  },

  tresgrand: {
    fontSize: '150%',
  },
  grand: {
    fontSize: '100%',
  },
  moyen: {
    fontSize: '75%',
  },
  petit: {
    fontSize: '50%',
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

    modal: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
    display: 'flex',
    padding: theme.spacing('auto', 'auto'),
    margin: theme.spacing('auto', 'auto'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  choixmots: {
    width: '45%',
    height: '96%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    fontSize: '1.75rem',
    fontWeight: 600,
    flexWrap: 'wrap',
    padding: theme.spacing(2, 4, 3),
    background:'rgba(240, 160, 240, 0.90)',
    justifyContent: 'center',
  },

  type_msg : {
      borderRadius: 16,
      background:'#222',
      color: "white",
      width : "90%",
      height: "4vh",
  },

  send_btn : {
      borderRadius: 16,
      background:'#222',
      color: "white",
      width : "4vh",
  },

  BtnMots : {
    fontFamily: 'Barlow, san-serif',
    fontSize: '60%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #f0a0f0, #e55be5, #8B00FF, #4a148c)',
    borderRadius: 6,
    border: 0,
    width: '30%',
    height: '15%',
    padding: theme.spacing ('auto', 'auto'),
    margin : theme.spacing (3, 1),
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
  },

  motChoisi : {
    fontSize: '120%',
    fontWeight: 600,
    margin: theme.spacing('auto', 1),
  }

}));
/*
██████   █████  ██████  ██   ██     ████████ ██   ██ ███████ ███    ███ ███████ 
██   ██ ██   ██ ██   ██ ██  ██         ██    ██   ██ ██      ████  ████ ██      
██   ██ ███████ ██████  █████          ██    ███████ █████   ██ ████ ██ █████ 
██   ██ ██   ██ ██   ██ ██  ██         ██    ██   ██ ██      ██  ██  ██ ██    
██████  ██   ██ ██   ██ ██   ██        ██    ██   ██ ███████ ██      ██ ███████ */

export const useStylesDark = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: 'url(https://source.unsplash.com/collection/31854366/)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  center:{
    margin: theme.spacing('auto', 'auto'),
  },

  minuteurbox:{
    width: '100%',
    height: '100%',
    background:'rgba(74, 20, 140, 0.50)',
    margin: theme.spacing(5, 0),
    borderRadius: 16,
  },

  minuteur:{
    color: "white",
    margin: theme.spacing(0, 5),
  },

  paper: {
    margin: theme.spacing(7.5, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  canvas: {
    backgroundColor: 'rgb(255, 255, 255)',
    background: 'white',
    borderRadius: 15,
    display: 'flex',
  },

  drawbox:{
    width: "100%",
  },

  couleurs: {
    margin: theme.spacing(8, 0),
    borderRadius: 15,
    width: '5.5vh',
    height:'65vh',
    border: '3px solid black',
    background:'#222',
    borderRadius: 5,
    padding:'1vh',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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

  cardjoueur: {
    width: '100%',
    height: '75%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    fontSize: '1.5rem',
    fontWeight: 600,
    flexWrap: 'wrap',
    margin : theme.spacing (8, 2),
    background:'rgba(74, 20, 140, 0.50)',
    color: '#FFFFFF',

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
    background:'rgba(74, 20, 140, 0.50)',
    overflow: 'auto',
    fontSize: '1.25rem',
    fontWeight: 400,
    color: '#FFFFFF',
  },

  chatbox: {
    margin: theme.spacing(1),
    width: '97%',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.25rem',
    fontWeight: 400,
    position: 'relative',
    overflow: 'auto',
    '&:hover': {
      overflowY: 'auto',
    },
  },

  styleB: {
      color: 'white',
      fontSize: '150%',
      borderRadius: 15,
      textAlign: 'center',
      width: '5.5vh',
      height:'5.5vh',
      border: '3px solid black',
      background:'#222',
      borderRadius: 5,
      marginTop: '0.5vh',
      marginLeft: '1vh',
  },

  tresgrand: {
    fontSize: '150%',
  },
  grand: {
    fontSize: '100%',
  },
  moyen: {
    fontSize: '75%',
  },
  petit: {
    fontSize: '50%',
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

    modal: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
    display: 'flex',
    padding: theme.spacing('auto', 'auto'),
    margin: theme.spacing('auto', 'auto'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  choixmots: {
    width: '45%',
    height: '96%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    fontSize: '1.75rem',
    fontWeight: 600,
    flexWrap: 'wrap',
    padding: theme.spacing(2, 4, 3),
    background:'rgba(74, 20, 140, 0.60)',
    justifyContent: 'center',
    color: '#FFFFFF',
  },

  type_msg : {
      borderRadius: 16,
      background:'#222',
      color: "white",
      width : "90%",
      height: "4vh",
  },

  send_btn : {
      borderRadius: 16,
      background:'#222',
      color: "white",
      width : "4vh",
  },

  BtnMots : {
    fontFamily: 'Barlow, san-serif',
    fontSize: '60%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #f0a0f0, #e55be5, #8B00FF, #4a148c)',
    borderRadius: 6,
    border: 0,
    width: '30%',
    height: '15%',
    padding: theme.spacing ('auto', 'auto'),
    margin : theme.spacing (3, 1),
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
  },

  motChoisi : {
    fontSize: '120%',
    fontWeight: 600,
    color: '#FFFFFF',
    margin: theme.spacing('auto', 1),
  }

}));
