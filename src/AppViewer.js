//Page de dessin
import './css/App.css';
import {useStylesLight, useStylesDark} from './css/AppViewerStyle'
import MenuAppBar from './Header';
import React, {useState} from 'react';
import reactCSS from 'reactcss';
import 'bootstrap/dist/css/bootstrap.css';
// React Color
import {CirclePicker } from 'react-color';
// React Icons
import { BiSave, BiEraser, BiSend } from 'react-icons/bi';
import { FaPaintBrush, FaTrashAlt, FaCircle, FaSquare } from 'react-icons/fa';
import { BsCircle, BsSquare } from 'react-icons/bs';
import { SiCurl } from "react-icons/si";
import { VscPaintcan } from 'react-icons/vsc';
import { RiArrowGoBackFill } from "react-icons/ri";
//import Material-ui from '@material-ui';
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import {Column, Row, Item} from '@mui-treasury/components/flex';
// fonction
import {Connexion, SetCanvas, Send} from './connexion';
import {getTheme, setTheme} from './theme';
import cx from 'clsx';

var light;
var dark;
var classes;

export function ChangeThemeAppViewer(){
  var theme = getTheme();

  if(theme == "light") {
    classes = light;
  }
  else {
    classes = dark;
  }
}

function App() {
  light = useStylesLight();
  dark = useStylesDark();
  ChangeThemeAppViewer();
  return (
    <Grid container xs={12} component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={true} sm={12} >
        <Row><MenuAppBar /></Row>
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
      <Grid item xs={false} sm={5} elevation={6} square className={classes.stream}>
        <video autoPlay id="Video"></video>
      </Grid>
      <Grid item xs={12} sm={3} elevation={6} square className={classes.cardchat}>
        <div id="chatBox" className="card-body"></div>
        <div className="card-footer input-group">
          <input id="message" className={classes.type_msg} placeholder="Type your message..."></input>
          <div className="input-group-append">
            <button id="send" className={classes.send_btn} ><BiSend/></button>
          </div>
        </div>
      </Grid>
    </Grid>
  )};

export default App
