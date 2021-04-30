import React from 'react';
import ReactDOM from 'react-dom';
import MenuAppBar from './Header';
//import Material-ui from '@material-ui';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControl, FormControlLabel, Grid, Link, Paper, TextField, Typography} from '@material-ui/core';
import {Column, Row, Item} from '@mui-treasury/components/flex';
//CSS
import {getTheme, setTheme} from './theme';
import {useStylesLight, useStylesDark} from './css/ScoreFinalStyle'

var light;
var dark;
var classes;

export function ChangeThemeScoreFinal(){
  var theme = getTheme();

  if(theme == "light") {
    classes = light;
  }
  else {
    classes = dark;
  }
}

function ScoreFinal() {
  light = useStylesLight();
  dark = useStylesDark();
  ChangeThemeScoreFinal();

  return (
    <Grid container xs={12} component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={true} sm={12}>
        <MenuAppBar/>
      </Grid>
      <Grid item container direction="row" id="game" justify="center">
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
