import React from 'react';
import ReactDOM from 'react-dom';
import { UseStyles, ValidationTextField} from './css/HelpStyle';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import BuildIcon from '@material-ui/icons/Build';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Column, Row, Item} from '@mui-treasury/components/flex';
import { borders } from '@material-ui/system';
import MenuAppBar from './Header';
import { HelpEnd } from './index';


export function HelpView() {

    const classes = UseStyles();

    var support = {
      pseudo: "",
      mail:"",
      explication:"",
    };


    function sendHelp(){
      support.pseudo = document.getElementById('PseudoHelp').value;
      support.mail = document.getElementById('EmailHelp').value;
      support.explication = document.getElementById('ExplicationlHelp').value;
      if (support.pseudo!="" && support.mail!="" && support.explication!=""){
        HelpEnd();
        console.log(support);
      }
    }

  return (
    <Grid container xs={12} component="main" className={classes.root}>
      <Grid item xs={true} sm={12}>
        <MenuAppBar/>
      </Grid>
      <Grid container className={classes.paper}>
        <CssBaseline />
          <Avatar className={classes.avatar}>
            <BuildIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Support
          </Typography>
            <ValidationTextField
             className = {classes.cadre }
              required
              id="PseudoHelp"
              label="Pseudo"
              variant="outlined"
            />
            <ValidationTextField
             className = {classes.cadre }
              required
              label="Email"
              id="EmailHelp"
              variant="outlined"
            />
            <ValidationTextField
             className = {classes.cadre }
              required
              multiline
              id="ExplicationlHelp"
              label="Explication"
              variant="outlined"
            />
            <Button
              onClick={sendHelp}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Send
            </Button>
      </Grid>
    </Grid>
  );
}


export function HelpViewEnd() {

  const classes = UseStyles();

  return (
    <Grid container xs={12} component="main" className={classes.root}>
      <Grid item xs={true} sm={12}>
        <MenuAppBar/>
      </Grid>
      <Grid container className={classes.paper}>
        <CssBaseline />
        <Typography variant="h2" component="h1" gutterBottom>
          Merci pour votre retour
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Quelqu\'un va vous contacter prochainement.'}
        </Typography>
      </Grid>
    </Grid>
  );
}
