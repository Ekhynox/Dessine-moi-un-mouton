//Page de dessin

import './css/App.css';
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
import { makeStyles } from '@material-ui/core/styles';
// fonction
import {ColorChange, DownloadCanvas} from './canvas';
import {Connexion, SetCanvas, Send} from './connexion';
import {SetCanvasDraw} from './canvas';
import avatar1 from './img/1.jpg';
import avatar2 from './img/2.jpg';
import avatar3 from './img/3.jpg';
import avatar4 from './img/4.jpg';
import avatar5 from './img/5.jpg';
import avatar6 from './img/6.jpg';
import {verybigPen, bigPen, smallPen, verysmallPen, erase, pinceau, clear, rect, rectfull, circle, circlefull, line, fill, save, undo} from './canvas';
import cx from 'clsx';


function App() {
  const classes = useStyles();
  //const colorChange = ({ hex }) => hex = ColorChange(hex); // fonction change la couleur du pinceau
  const colorChange = ({hex}) => {
    hex = ColorChange(hex); // fonction change la couleur du pinceau
  }
  const PersonItem = ({ src, name, friendCount }) => {
    return (
      <Row gap={2} p={1}>
        <Item>
          <Avatar className="avatar" src={src} />
        </Item>
        <Row gap={15} p={2}>
          <Item><div>{name}</div></Item >
          <Item> 400</Item>
        </Row>
      </Row>
    );
  };
  return (
    <Grid container xs={12} component="main" className={classes.root}>
      <CssBaseline />
        <Grid item xs={false} sm={2} container direction="row" id="game">
          <Column p={1} gap={0} className={classes.cardjoueur}>
            <Row wrap p={2} >
              <Item stretched>Participant.e.s</Item>
              <Item>Score</Item>
              </Row>
              <Divider variant={'middle'} />
              <PersonItem name={'Chocoluna'} src={avatar1} />
          </Column>
        </Grid>
        <Grid item xs={false} sm={4} component={Paper} elevation={6} square className={classes.paper}>
          <div className="drawbox">
            <canvas id="DrawBox" width="670" height="670"></canvas>
          </div>
          </Grid>
          <Grid item xs={false} sm={0.5} component={Paper} elevation={6} square className={classes.paper}>

              <button onClick={verybigPen} className="styleB tresgrand outils1" id="Pen++"><FaCircle/></button>
              <button onClick={bigPen} className="styleB grand outils1" id="Pen+"><FaCircle/></button>
              <button onClick={smallPen} className="styleB moyen outils1" id="Pen"><FaCircle/></button>
              <button onClick={verysmallPen} className="styleB petit outils1" id="Pen-"><FaCircle/></button>
              <button onClick={pinceau} className="styleB outils1" id="Pinceau"><FaPaintBrush/></button>
              <button onClick={rect} className="styleB outils1" id="drawRect"><BsSquare/></button>
              <button onClick={rectfull} className="styleB outils1" id="drawRectFull"><FaSquare/></button>
              <button onClick={circle} className="styleB outils1" id="drawCircle"><BsCircle/></button>
              <button onClick={circlefull} className="styleB outils1" id="drawCircleFull"><FaCircle/></button>
              <button onClick={line} className="styleB outils1" id="drawLine"><SiCurl/></button>
              <button onClick={fill} className="styleB outils1" id="fillIn"><VscPaintcan/></button>
              <button onClick={erase} className="styleB outils2" id="Erase"><BiEraser/></button>
              <button onClick={clear} className="styleB outils2" id="Clear"><FaTrashAlt/></button>
              <button onClick={undo} className="styleB outils2" id="Bundo"><RiArrowGoBackFill/></button>
             <button onClick={save} className="styleB outils2" download="example.jpg" id="saveImage"><BiSave/></button>
        </Grid>
        <Grid item xs={false} sm={0.5} component={Paper} elevation={6} square className={classes.paper}>
          <CirclePicker
            onChange={colorChange}
            width = {1}
            circleSize ={26}
            colors = {["#e91e63", "#9c27b0", "#673ab7", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "black", "white"]}
            />
        </Grid>
        <Grid item xs={12} sm={3} component={Paper} elevation={6} square className={classes.paper}>
          <div id="chatBox" className="card-body msg_card_body"></div>
            <div className="card-footer input-group">
                <input id="message" className="form-control type_msg" placeholder="Type your message..."></input>
                <div className="input-group-append">
                    <button id="send" className="input-group-text send_btn" ><BiSend/></button>
                </div>
          </div>
        </Grid>
    </Grid>

  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  paper: {
    margin: theme.spacing(6, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  headline: {
    color: '#122740',
    fontSize: '2.5rem',
    fontWeight: 600,
    align: 'center',
  },
  header: {
    fontFamily: 'Barlow, san-serif',
    backgroundColor: '#fff',
  },

  cardjoueur: {
    width: '100%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    fontSize: '1.25rem',
    fontWeight: 600,
    flexWrap: 'wrap',
  },

  card: {
    width: '92%',
    height : '92%',
    margin : theme.spacing (5, 5),
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
  },

  avatarchoice: {
      display: 'flex',
      '& > *': {
      margin: theme.spacing(1),
      },
    },
    medium: {
      width: '50%',
      height: '70%',
    },
    large: {
      width: '23%',
      height: '80%',
    },
}));

export default App
