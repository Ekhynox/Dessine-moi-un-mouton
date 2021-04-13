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


export function Help() {
  ReactDOM.render(
    <React.StrictMode>
    <HelpView/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

var support = {
  pseudo: "",
  mail:"",
  explication:"",
};

function send(){
  support.pseudo = document.getElementById('Pseudo').value;
  support.mail = document.getElementById('Email').value;
  support.explication = document.getElementById('Explication').value;
  console.log(support);
}

export default function HelpView() {
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
              <Grid item xs={12}>
                <TextField
                  className={classes.cadre}
                  autoComplete="pseudo"
                  name="Pseudo"
                  variant="outlined"
                  required
                  fullWidth
                  id="Pseudo"
                  label="Pseudo"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.cadre}
                  variant="outlined"
                  required
                  fullWidth
                  id="Email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.cadre}
                  variant="outlined"
                  required
                  fullWidth
                  name="explication"
                  label="Explication"
                  id="Explication"
                  autoComplete=""
                />
              </Grid>
              <Button
                onClick={send}
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
    marginLeft: '50vh',
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
