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
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, LinearProgress, Link, Paper, TextField, Typography } from '@material-ui/core';
import {Column, Row, Item} from '@mui-treasury/components/flex';
import { makeStyles } from '@material-ui/core/styles';
// fonction
import {Connexion, SetCanvas, Send} from './connexion';
import {ColorChange, DownloadCanvasn, SetCanvasDraw} from './canvas';
import {verybigPen, bigPen, smallPen, verysmallPen, erase, pinceau, clear, rect, rectfull, circle, circlefull, line, fill, save, undo} from './canvas';
import avatar1 from './img/1.jpg';
import avatar2 from './img/2.jpg';
import avatar3 from './img/3.jpg';
import avatar4 from './img/4.jpg';
import avatar5 from './img/5.jpg';
import avatar6 from './img/6.jpg';
import cx from 'clsx';

import PropTypes from "prop-types";


function App() {
  const classes = useStyles();
  //const colorChange = ({ hex }) => hex = ColorChange(hex); // fonction change la couleur du pinceau
  const colorChange = ({hex}) => {
    hex = ColorChange(hex); // fonction change la couleur du pinceau
  }
  const PersonItem = ({ src, name }) => {
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

//fonction minuteur
  var MIN = 0; // MIN = Minimum expected value
  var MAX = 80; // MAX = Maximium expected value

  const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);

  function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center">
        <Box className={classes.minuteur} mr={1}>
          <LinearProgress variant="determinate" value={normalise(props.value)} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            props.value
          )}Sec`}</Typography>
        </Box>
      </Box>
    );
  }

  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired
  };

  const [progress, setProgress] = React.useState(MIN);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= MAX ? 0 : prevProgress + 1 // 0 a remplacer  avec une fonctio
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
//fin minuteur

  return (
    <Grid container xs={12} component="main" className={classes.root}>
      <CssBaseline />
      <div id="wchoix">Ici on doit voir la liste de mots</div>
        <Grid item xs={false} sm={3} container direction="row" id="game">
          <Column p={1} gap={0} className={classes.cardjoueur}>
            <Row wrap p={2}>
              <Item stretched>Participant.e.s</Item>
              <Item>Score</Item>
              </Row>
              <Divider variant={'middle'} />
              <PersonItem name={'Chocoluna'} src={avatar1} />
          </Column>
        </Grid>
        <Grid item xs={false} sm={4} elevation={6} square>

            <Row wrap p={2}>
              <Row className={classes.minuteur}>
                <LinearProgressWithLabel value={progress} />
              </Row>
              <Row className={classes.canvas}>
                <div className="drawbox">
                  <canvas id="DrawBox" width="600" height="600"></canvas>
                  </div>
              </Row>
              <Row className={classes.center}>
                <button onClick={erase} className={classes.styleB} id="Erase"><BiEraser/></button>
                <button onClick={clear} className={classes.styleB} id="Clear"><FaTrashAlt/></button>
                <button onClick={undo} className={classes.styleB} id="Bundo"><RiArrowGoBackFill/></button>
                <button onClick={save} className={classes.styleB} download="example.jpg" id="saveImage"><BiSave/></button>
              </Row>
            </Row>

          </Grid>
          <Grid item xs={false} sm={0.5} elevation={6} square className={classes.paper}>
              <button onClick={verybigPen} className={cx(classes.styleB, classes.tresgrand)} id="Pen++"><FaCircle/></button>
              <button onClick={bigPen} className={cx(classes.styleB, classes.grand)} id="Pen+"><FaCircle/></button>
              <button onClick={smallPen} className={cx(classes.styleB, classes.moyen)} id="Pen"><FaCircle/></button>
              <button onClick={verysmallPen} className={cx(classes.styleB, classes.petit)} id="Pen-"><FaCircle/></button>
              <button onClick={pinceau} className={classes.styleB} id="Pinceau"><FaPaintBrush/></button>
              <button onClick={rect} className={classes.styleB} id="drawRect"><BsSquare/></button>
              <button onClick={rectfull} className={classes.styleB} id="drawRectFull"><FaSquare/></button>
              <button onClick={circle} className={classes.styleB} id="drawCircle"><BsCircle/></button>
              <button onClick={circlefull} className={classes.styleB} id="drawCircleFull"><FaCircle/></button>
              <button onClick={line} className={classes.styleB} id="drawLine"><SiCurl/></button>
              <button onClick={fill} className={classes.styleB} id="fillIn"><VscPaintcan/></button>
        </Grid>
        <Grid item xs={false} sm={0.5} elevation={6} square className={classes.couleurs}>
          <CirclePicker
            onChange={colorChange}
            width = {1}
            circleSize ={21}
            colors = {["#e91e63", "#9c27b0", "#673ab7", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "black", "white"]}/>
        </Grid>
        <Grid item xs={12} sm={3} elevation={6} square className={classes.cardchat}>
          <div id="chatBox" className="card-body"></div>
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

/*
███████ ████████ ██    ██ ██      ███████ 
██         ██     ██  ██  ██      ██      
███████    ██      ████   ██      █████ 
     ██    ██       ██    ██      ██    
███████    ██       ██    ███████ ███████ */

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: 'url(https://source.unsplash.com/collection/24051068/)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  center:{
    margin: theme.spacing('auto', 'auto'),
  },

  minuteur:{
      width: "100vh",
  },

  paper: {
    margin: theme.spacing(7.5, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  canvas: {
    backgroundColor: 'rgb(255, 255, 255)',
    background: 'white',
    borderRadius: 15,
    display: 'flex',
    marginTop: '6vh',
  },

  couleurs: {
    margin: theme.spacing(8, 0),
    borderRadius: 15,
    width: '5.5vh',
    height:'65vh',
    border: '3px solid black',
    background:'#222',
    borderRadius: 5,
    padding:'1vh',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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
    height: '75%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    fontSize: '1.25rem',
    fontWeight: 600,
    flexWrap: 'wrap',
    margin : theme.spacing (8, 2),
    background:'rgba(240, 160, 240, 0.30)',
  },

  cardchat: {
    margin: theme.spacing(8, 2),
    width: '90%',
    height: '80%',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    background:'rgba(240, 160, 240, 0.30)',
    overflow: 'auto',
  },

  styleB: {
      color: 'white',
      fontSize: '150%',
      borderRadius: 15,
      textAlign: 'center',
      width: '5.5vh',
      height:'5.5vh',
      border: '3px solid black',
      background:'#222',
      borderRadius: 5,
      marginTop: '0.5vh',
      marginLeft: '1vh',
  },

  tresgrand: {
    fontSize: '150%',
  },
  grand: {
    fontSize: '100%',
  },
  moyen: {
    fontSize: '75%',
  },
  petit: {
    fontSize: '50%',
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
