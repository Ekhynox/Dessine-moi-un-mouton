import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControl, FormControlLabel, Grid, Link, Paper, TextField, Typography} from '@material-ui/core';
/*
███████ ████████ ██    ██ ██      ███████ 
██         ██     ██  ██  ██      ██      
███████    ██      ████   ██      █████ 
     ██    ██       ██    ██      ██    
███████    ██       ██    ███████ ███████ */

export const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  },
  })(TextField);

export const UseStyles = makeStyles((theme) => ({
  root: {
    height:'100vh',
    backgroundImage: 'url(https://source.unsplash.com/collection/24051068/)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: theme.spacing('auto', 'auto'),
  },

  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  cadre: {
    margin: theme.spacing(0.5),
    background:'rgba(240, 160, 240, 0.30)',
    borderRadius: 4,
    width: '30%',
  },

  submit: {
    margin: theme.spacing(1, 1, 1),
    width: '10%',
    height: '7%',
  },
}));
