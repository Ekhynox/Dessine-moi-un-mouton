//Page de dessin
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import MenuAppBar from './Header';
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
//Minuteur
import PropTypes from "prop-types";
import CircularProgress from '@material-ui/core/CircularProgress';
// fonction
import {Connexion, SetCanvas, Send, NouvelleManche} from './connexion';
import {SetJeu, ChangePlayer, GetPlayer, GetTab} from './index';
import {ColorChange, DownloadCanvasn, SetCanvasDraw} from './canvas';
import {verybigPen, bigPen, smallPen, verysmallPen, erase, pinceau, clear, rect, rectfull, circle, circlefull, line, fill, save, undo} from './canvas';
import {GetChoisi, SetChoisi, Words_list} from './words';
import {getTheme, setTheme} from './theme';
import cx from 'clsx';
//CSS
import {useStylesLight, useStylesDark} from './css/AppStyle';

var light;
var dark;
var classes;

export function ChangeThemeApp(){
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
  ChangeThemeApp();

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

//fonction fin de manche
function endround(){
  handleOpen(); //on raffiche le modal
  document.getElementById("wchoixfinal").innerHTML=""; //on nettoie l'html

  setTimeout(function () {
    var wchoix = document.getElementById("wchoix");
  //  wchoix.innerHTML = "";
    var val = "Nouvelle Manche";
    const el = React.createElement(ButtonItem, {value : val}, document.getElementById("wchoix"));
    ReactDOM.render(el, document.getElementById("wchoix"));

    document.getElementById("titremodal1").innerHTML="Time's up !";
  }, 10);
  return 0; //On restart le chrono a 0;
}

function endroundbest(){
  ChangePlayer();
  NouvelleManche();
  SetJeu();
}

const ButtonItem= ({value}) => {
  ChangeThemeApp();
  return(
      <Button className={classes.BtnMots} onClick={endroundbest} value ={value} id="nextTurn">{value}</Button>
  );
};

//fonction minuteur
  var MIN = 0; // MIN = Minimum expected value of time
  var MAX = GetTab()[0].temps; // MAX = Maximium expected value of time

  const normalise = (value) => ((value - MAX) * 100) / (MAX - MIN);
  const normaliselabel = (value) => (MAX - value);

  const [progress, setProgress] = React.useState(MIN);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (GetChoisi()){ //On lance le chrono que si on a choisi un mot
        setProgress((prevProgress) =>
          prevProgress >= MAX ? endround() : prevProgress + 1 // 0 a remplacer  avec une fonction
        );
      }
    }, 1000);
    return () => {
      clearInterval(timer);

    };
  }, []);
//fin minuteur


function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        className={classes.minuteur}
        variant="determinate"
        size={50}
        thickness = {7}
        value={normalise(props.value)}/>
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography className={classes.minuteur} variant="caption" component="div" color="textSecondary" value={normalise(props.value)} >
          {`${normaliselabel(props.value)}s`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

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
          <MenuAppBar />
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
            <Row wrap p={3}>
               <Row className={classes.minuteurbox} p={1} gap={0}>
                  <CircularProgressWithLabel value={progress}/>
                  <div id="wchoixfinal"></div>
                </Row>
              <Row className={classes.canvas}>
                <div>
                  <canvas className={classes.drawbox} id="DrawBox"></canvas>
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
            colors = {["#f06292", "#f8bbd0", "#ce93d8", "#673ab7", "#0d47a1", "#4fc3f7", "#80deea", "#00695c", "#8bc34a", "#ffeb3b", "#ff9800", "#d50000", "#5d4037", "#bdbdbd", "#607d8b", "black", "white"]}/>
        </Grid>
        <Grid item xs={12} sm={3} elevation={6} square className={classes.cardchat}>
          <div id="chatBox" className={classes.chatbox}></div>
            <div className="card-footer input-group">
                <input id="message"  className={classes.type_msg} placeholder="Type your message..."></input>
                <div className="input-group-append">
                    <button id="send" className={classes.send_btn} ><BiSend/></button>
                </div>
          </div>
        </Grid>
    </Grid>
  )
}
export default App
