import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Column, Row, Item} from '@mui-treasury/components/flex';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, Link, Paper, TextField, Typography} from '@material-ui/core';
import MenuAppBar from './Header';
import { AboutUs } from './index';

export function AboutUsView() {
  const useStyles = makeStyles((theme) => ({
      root: {
        height: '100vh',
      },
      image: {
        backgroundImage: 'url(https://source.unsplash.com/collection/24051068/)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height : '93%',
      },
      card: {
        width: '92%',
        height : '92%',
        margin : theme.spacing (5, 5),
        borderRadius: 16,
        boxShadow: '0 8px 16px 0 #BDC9D7',
        overflow: 'hidden',
        backgroundColor: "white",
        opacity: 0.50,
        alignItems: 'center',
      },
      header: {
        fontFamily: 'Barlow, san-serif',
        backgroundColor: '#fff',
      },
    }));
  const classes = useStyles();
  return (
    <Grid component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={true} sm={12}>
        <Row><MenuAppBar/></Row>
      </Grid>
      <Grid item xs={false} container direction="column" className={classes.image}>
        <Column container className={classes.card}>
          <Row wrap p={2} alignItems={'baseline'} className={classes.header}>
            <h1>Je ne sais pas quoi mettre</h1>
          </Row>
        </Column>
      </Grid>
    </Grid>
  );


}
