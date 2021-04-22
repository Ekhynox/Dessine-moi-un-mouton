import React from 'react';
import ReactDOM from 'react-dom';
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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Column, Row, Item} from '@mui-treasury/components/flex';
import { borders } from '@material-ui/system';
import MenuAppBar from './Header';

var controlePseudo = false;
var controleMail = false;
var controleExplication = false;

var support = {
  pseudo: "",
  mail:"",
  explication:"",
};

export function Help() {
  ReactDOM.render(
    <React.StrictMode>
    <HelpView/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export function HelpEnd() {
  ReactDOM.render(
    <React.StrictMode>
    <HelpViewEnd/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


function controleTextePseudo(cl){
  if (!controlePseudo){
    return (
      <Grid item xs={12}>
        <TextField
          className={cl.cadre}
          autoFocus
          fullWidth
          required
          autoComplete="pseudo"
          id="Pseudo"
          label="Pseudo"
          name="Pseudo"
          variant="outlined"
        />
      </Grid>
    );
  }
  else {
    return (<Grid item xs={12}>
      <TextField
        className={cl.cadre}
        autoFocus
        error
        fullWidth
        required
        autoComplete="pseudo"
        helperText="Veuillez compléter ce champ."
        id="Pseudo"
        label="Pseudo"
        name="Pseudo"
        variant="outlined"
      />
    </Grid>);
  }
}

function controleTexteMail(cl) {
  if (!controleMail) {
    return (
      <Grid item xs={12}>
        <TextField
          className={cl.cadre}
          fullWidth
          required
          autoComplete="email"
          id="Email"
          label="Email Address"
          name="email"
          variant="outlined"
        />
      </Grid>
    );
  }
  else {
    return (
      <Grid item xs={12}>
        <TextField
          className={cl.cadre}
          error
          fullWidth
          required
          autoComplete="email"
          helperText="Veuillez compléter ce champ."
          id="Email"
          label="Email Address"
          name="email"
          variant="outlined"
        />
      </Grid>
    );
  }
}

function controleTexteExplication(cl) {
  if (!controleExplication) {
    return (
      <Grid item xs={12}>
        <TextField
          className={cl.cadre}
          fullWidth
          multiline
          required
          autoComplete=""
          id="Explication"
          label="Explication"
          name="explication"
          rows={4}
          variant="outlined"
        />
      </Grid>
    );
  }
  else {
    return (
      <Grid item xs={12}>
        <TextField
          className={cl.cadre}
          error
          fullWidth
          multiline
          required
          autoComplete=""
          helperText="Veuillez compléter ce champ."
          id="Explication"
          label="Explication"
          name="explication"
          rows={4}
          variant="outlined"
        />
      </Grid>
    );
  }
}

function controleSendHelp(){
  support.pseudo = document.getElementById('Pseudo').value;
  support.mail = document.getElementById('Email').value;
  support.explication = document.getElementById('Explication').value;

  if (support.pseudo==""){
    controlePseudo = true;
    Help();
  }
  else {
    controlePseudo = false;
  }
  if (support.mail==""){
    controleMail = true;
    Help();
  }
  else {
    controleMail = false;
  }
  if (support.explication==""){
    controleExplication = true;
    Help();
  }
  else {
    controleExplication = false;
  }

  if (support.pseudo!="" && support.mail!="" && support.explication!=""){
    sendHelp();
  }

}

function sendHelp(){
  console.log(support);
  HelpEnd();
}

export default function HelpView() {
  var classes = useStyles();
  return (
    <Grid container xs={12} component="main" className={classes.root}>
      <Grid item xs={true} sm={12}>
        <Row><MenuAppBar/></Row>
      </Grid>
      <Grid>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <BuildIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Support
          </Typography>
            <Grid container spacing={1}>
              {controleTextePseudo(classes)}
              {controleTexteMail(classes)}
              {controleTexteExplication(classes)}
              <Button
                onClick={controleSendHelp}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Send
              </Button>
            </Grid>
        </div>
      </Grid>
    </Grid>
  );
}


function HelpViewEnd() {
  var classes = useStyles();
  return (
    <Grid container xs={12} component="main" className={classes.root}>
      <Grid item xs={true} sm={12}>
        <Row><MenuAppBar/></Row>
      </Grid>
      <Grid>
        <CssBaseline />
        <div className={classes.paper}>
          <CssBaseline />
            <Typography variant="h2" component="h1" gutterBottom>
              Merci pour votre retour
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              {'Quelqu\'un va vous contacter prochainement.'}
            </Typography>
        </div>
      </Grid>
    </Grid>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
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
    marginLeft: '70vh',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  cadre: {
    backgroundColor: "white",
    opacity: 0.85,
    borderRadius: 4,
  },

}));
