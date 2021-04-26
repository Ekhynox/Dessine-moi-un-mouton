import React from 'react';
import ReactDOM from 'react-dom';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControl, FormControlLabel, Grid, Link, Paper, TextField, Typography} from '@material-ui/core';
import {Column, Row, Item} from '@mui-treasury/components/flex';
import MenuAppBar from './Header';
import { makeStyles } from '@material-ui/core/styles';

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
  cardjoueur: {
    width: '100%',
    height: '75%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    fontSize: '1.25rem',
    fontWeight: 600,
    flexWrap: 'wrap',
    margin : theme.spacing (8, 2),
    background:'rgba(240, 160, 240, 0.30)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
  },
}));

function ScoreFinal() {
  const classes = UseStyles();

  return (
    <Grid container xs={12} component="main" className={classes.root}>
      <Grid item xs={true} sm={12}>
        <MenuAppBar/>
      </Grid>
      <Grid item xs={false} sm={3} container direction="row" id="game">
        <Column p={1} gap={0} className={classes.cardjoueur}>
          <Row wrap p={2}>
            <Item stretched>Participant.e.s</Item>
            <Item>Score</Item>
            </Row>
            <div id="playerZone"></div>
        </Column>
      </Grid>
    </Grid>
  );
}

export default ScoreFinal
