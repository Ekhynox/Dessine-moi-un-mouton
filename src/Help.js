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
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Column, Row, Item} from '@mui-treasury/components/flex';
import { borders } from '@material-ui/system';
import MenuAppBar from './Header';
import { HelpEnd } from './index';

var controlePseudo = false;
var controleMail = false;
var controleExplication = false;

var support = {
  pseudo: "",
  mail:"",
  explication:"",
};




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

function sendHelp(){
  if (support.pseudo!="" && support.mail!="" && support.explication!=""){
    HelpEnd();
    console.log(support);
  }
}

export function HelpView() {
  const ValidationTextField = withStyles({
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

    const classes = useStyles();

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
            <ValidationTextField
             className = {classes.cadre }
              label="Pseudo"
              required
              variant="outlined"
              id="PseudoHelp"
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
        </div>
      </Grid>
    </Grid>
  );


}


export function HelpViewEnd() {
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
}
