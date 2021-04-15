//Page de dessin
import './css/App.css';
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
import {Avatar, Box, Button, Card, CardActions, CardContent, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, LinearProgress, Link, Modal, Paper, TextField, Typography } from '@material-ui/core';
import {Column, Row, Item} from '@mui-treasury/components/flex';
import { makeStyles } from '@material-ui/core/styles';
// fonction
import {Connexion, SetCanvas, Send, NouvelleManche} from './connexion';
import {SetJeu, ChangePlayer} from './index';
import {ColorChange, DownloadCanvasn, SetCanvasDraw} from './canvas';
import {verybigPen, bigPen, smallPen, verysmallPen, erase, pinceau, clear, rect, rectfull, circle, circlefull, line, fill, save, undo} from './canvas';
import {GetChoisi, SetChoisi, Words_list} from './words';
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
  const rootRef = React.useRef(null);
  //fonction pour gérer l'état de la fenêtre modal
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


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


//fonction fin de manche
function endround(){
  handleOpen(); //on raffiche le modal
  document.getElementById("wchoixfinal").innerHTML=""; //on nettoie l'html

  setTimeout(function () {
    var wchoix = document.getElementById("wchoix");
    wchoix.innerHTML = "";
    var bt4 = document.createElement("BUTTON");
    bt4.setAttribute("id", "nextTurn");
    bt4.className = "btn";
    bt4.innerHTML="Prochaine Manche";
    wchoix.appendChild(bt4);

    var nextTurn = document.getElementById('nextTurn');
    nextTurn.addEventListener('click', function(event){
      ChangePlayer();
      NouvelleManche();
      SetJeu();
    });

    document.getElementById("titremodal1").innerHTML="Time's up !";
  }, 10);
  return 0; //On restart le chrono a 0;
}

//fonction minuteur
  var MIN = 0; // MIN = Minimum expected value of time
  var MAX = 10; // MAX = Maximium expected value of time

  const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);

  function LinearProgressWithLabel(props) {
    if (GetChoisi()){ //On affiche le chrono que si on a choisi un mot
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
    return(<div/>);
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
      if (GetChoisi()){ //On lance le chrono que si on a choisi un mot
        setProgress((prevProgress) =>
          prevProgress >= MAX ? endround() : prevProgress + 1 // 0 a remplacer  avec une fonctio
        );
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
//fin minuteur

  return (
    <Grid container xs={12} component="main" className={classes.root}>
      <CssBaseline />
        <Modal
              disableEnforceFocus
              disableAutoFocus
              open={open}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              className={classes.modal}
              container={() => rootRef.current}>
             <div className={classes.choixmots}>
                <div id="titremodal1"> Choisissez un mot</div>
                <p id="wchoix" onClick={handleClose}></p>
             </div>
        </Modal>
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
        <Grid item xs={false} sm={4} elevation={6} square>
            <Row wrap p={2}>
              <Row>
                <div id="wchoixfinal"></div>
              </Row>
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

    modal: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
    display: 'flex',
    padding: theme.spacing(8, 3, 4),
    alignItems: 'center',
    justifyContent: 'center',
  },

  choixmots: {
    width: '45%',
    height: '96%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    fontSize: '1.75rem',
    fontWeight: 600,
    flexWrap: 'wrap',
    padding: theme.spacing(2, 4, 3),
    background:'rgba(240, 160, 240, 0.90)',
    justifyContent: 'center',
  },

}));

export default App
