import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControl, FormControlLabel, Grid, Link, Paper, TextField, Typography} from '@material-ui/core';
/*
███████ ████████ ██    ██ ██      ███████ 
██         ██     ██  ██  ██      ██      
███████    ██      ████   ██      █████ 
     ██    ██       ██    ██      ██    
███████    ██       ██    ███████ ███████ */

export const useStylesLight = makeStyles((theme) => ({
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
    alignContent: 'center',
    align: 'left',
    margin: theme.spacing(1),
  },

  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(10),
    height: theme.spacing(10),
  },

  tool: {
    margin: theme.spacing(1),
    justify:"center",
  },

  box: {
    margin: theme.spacing(1),
    background:'rgba(240, 160, 240, 0.50)',
  },
}));

/*
██████   █████  ██████  ██   ██     ████████ ██   ██ ███████ ███    ███ ███████ 
██   ██ ██   ██ ██   ██ ██  ██         ██    ██   ██ ██      ████  ████ ██      
██   ██ ███████ ██████  █████          ██    ███████ █████   ██ ████ ██ █████ 
██   ██ ██   ██ ██   ██ ██  ██         ██    ██   ██ ██      ██  ██  ██ ██    
██████  ██   ██ ██   ██ ██   ██        ██    ██   ██ ███████ ██      ██ ███████ */

export const useStylesDark = makeStyles((theme) => ({
  root: {
    height:'100vh',
    backgroundImage: 'url(https://source.unsplash.com/collection/31854366/)',
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
    alignContent: 'center',
    align: 'left',
    margin: theme.spacing(1),
  },

  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(10),
    height: theme.spacing(10),
  },

  tool: {
    margin: theme.spacing(1),
    justify:"center",
    color: '#e8c2ff',
  },

  box: {
    margin: theme.spacing(1),
    background:'rgba(74, 20, 140, 0.60)',
  },
}));
